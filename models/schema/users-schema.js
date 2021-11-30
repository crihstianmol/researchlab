import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true
        },
        DNI: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ['Pendiente', 'Autorizado', 'No Autorizado'],
            default:'Pendiente',
            required: true
        },
        role: {
            type: String,
            enum: ['Estudiante', 'Líder', 'Admin'],
            default:'Pendiente',
            required: true
        },
    },
    {
        toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
        toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
    }
);

const UserModel = model('users', userSchema);

export { UserModel };