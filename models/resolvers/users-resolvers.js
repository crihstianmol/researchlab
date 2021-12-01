import { UserModel } from '../schema/users-schema.js';

const userResolvers = {
    Query:{
        User: async(root,args)=>{
            const user = await UserModel.findOne({_id : args._id})
            return user
        },
        Users: async()=>{
            const users = await UserModel.find()
            return users
        },
        Students: async() =>{
            const users = await UserModel.find({role: "Estudiante"})
            return users
        }
    }
};

export {userResolvers};