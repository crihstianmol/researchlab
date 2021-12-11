import { UserModel } from "../schema/users-schema.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

const userResolvers = {
  Mutation: {
    createUser: async (root, args) => {
      const salt = bcrypt.genSaltSync();
      const userArgs = args;
      userArgs.status = "Pendiente"
      userArgs.role = userArgs.role.replace("_", " ");
      userArgs.password = bcrypt.hashSync(userArgs.password, salt);
      const user = await UserModel.create(userArgs);
      return user;
    },

    updateUser: async (root, args) => {
      const userArgs = args;
      if(userArgs.status){
        userArgs.status = userArgs.status.replace("_", " ");
      }
      if (userArgs.password) {
        const salt = bcrypt.genSaltSync();
        userArgs.status = userArgs.status.replace("_", " ");
        userArgs.password = bcrypt.hashSync(userArgs.password, salt);
        let user = await UserModel.findOneAndUpdate(
          { _id: userArgs._id }, userArgs
        );
        user = await UserModel.findOne({ _id: userArgs._id })
        user.password = ""
        return user;
      } else {
        let user = await UserModel.findOneAndUpdate(
          { _id: userArgs._id }, userArgs,
          {
            upsert: true,
          }
        );
        user = await UserModel.findOne({ _id: userArgs._id })
        user.status = user.status.replace(" ", "_");
        user.password = ""
        return user;
      }
    },
  },
  Query: {
    Users: async (root, args) => {

      let filtro = {}
      if (args._id) {
        filtro._id = args._id
      }
      if (args.email) {
        filtro.email = args.email
      }
      if (args.DNI) {
        filtro.DNI = args.DNI
      }
      if (args.name) {
        filtro.name = args.name
      }
      if (args.lastName) {
        filtro.lastName = args.lastName
      }
      if (args.role) {
        
        filtro.role = args.role
      }
      if (args.status) {
        args.status = args.status.replace("_", " ");
        filtro.status = args.status
      }
      const usersList = await UserModel.find(filtro);
      usersList.forEach((element)=>{
        element.password = ''
        element.status = element.status.replace(" ", "_");
        element.role = element.role.replace(" ", "_");
      })
      console.log(usersList)
      return usersList;
    },
    loginUser: async (root, args) => {
      let response = {
        response: "",
        jwt: ""
      }
      const user = args;
      const userFromDb = await UserModel.findOne({ email: user.email });
      if (userFromDb) {
        if (bcrypt.compareSync(user.password, userFromDb.password)) {
          const token = jwt.sign({ id: userFromDb._id, role: userFromDb.role }, process.env.JSON_WTKN, {
            expiresIn: '6h'
          });
          response.response = "Ok";
          response.jwt = token;
        } else {
          response.response = "Contraseña Incorrecta."
        }
      } else {
        response.response = "No se encontró el usuario."
      }
      return response;
    }
  },
};

export { userResolvers };
