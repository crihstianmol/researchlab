import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import db from './driver/mongo-connection';
import { tipos } from './graphql/types.js';
import { resolvers } from './graphql/resolvers.js';
// import { validateToken } from './utils/tokenUtils.js';

dotenv.config();


// const usersRouter = require('./routes/users')
// const salesRouter = require('./routes/sales')
// const productsRouter = require('./routes/products')

const port = process.env.PORT;
const backApp = express();

backApp.use(cors())
backApp.use(express.json())

// backApp.use('/api/users',usersRouter)
// backApp.use('/api/sales',salesRouter)
// backApp.use('/api/products',productsRouter)

backApp.get('/', (req, res) => {
    res.send('Welcome to ResearchLab App API')
})

backApp.listen(port,()=>{
    console.log(`Running in port ${port}`)
})