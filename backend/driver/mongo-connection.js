import mongoose from 'mongoose';

mongoose.set('runValidators', true);

const dbConnection = async() =>{
  return await mongoose.connect(process.env.DBCONNECTIONSTRING).then(() => {
    console.log('Conectado a MongoDB');
  })
  .catch((e) => {
    console.error('Hubo un error en la conexión: ', e);
  });
}
export default dbConnection;