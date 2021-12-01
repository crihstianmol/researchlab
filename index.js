import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import db from './driver/mongo-connection';
import { tipos } from './graphql/types.js';
import { resolvers } from './graphql/resolvers.js';


dotenv.config();

const port = process.env.PORT;
const backApp = express();

backApp.use(cors())
backApp.use(express.json())


backApp.get('/', (req, res) => {
    res.send('Welcome to ResearchLab App API')
})

backApp.listen(port,()=>{
    console.log(`Running in port ${port}`)
})