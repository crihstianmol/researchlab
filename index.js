require('dotenv').config();
const express = require('express');
const cors = require('cors')

require('./driver/mongo-connection');

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