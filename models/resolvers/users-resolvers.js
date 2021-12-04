import { UserModel } from "../schema/users-schema.js";

const userResolvers = {
  Mutation: {
    createUser: async (root, args) => {
      const userArgs = args;
      userArgs.status = userArgs.status.replace("_", " ");
      userArgs.role = userArgs.role.replace("_", " ");
      const user = await UserModel.create(userArgs);
      return user;
    },
    editUser: async (root, args) => {
      const userArgs = args;
      const user = await UserModel.findOneAndUpdate(
        { _id: userArgs._id },
        {
          email: userArgs.email,
          DNI: userArgs.DNI,
          name: userArgs.name,
          lastName: userArgs.lastName,
          password: userArgs.password,
          status: userArgs.status,
        }
      );
      return user;
    },
  },
  Query: {
    User: async (root, args) => {
      const user = await UserModel.findOne({ _id: args._id });
      return user;
    },
    Users: async () => {
      const users = await UserModel.find();
      return users;
    },
    Students: async () => {
      const users = await UserModel.find({ role: "Estudiante" });
      return users;
    },
  },
};

export { userResolvers };
