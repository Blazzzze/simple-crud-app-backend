const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route');
const app = express();


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api/products',productRoute);



app.get('/', (req, res) => {
    res.send('Hello from Node API Server Update');
});





//update product




//delete product



mongoose.connect('mongodb+srv://aryan21024:kP499uE60gKoPH1m@backenddb.gbsshdu.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        console.log('Connected to the database!');

        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(error => {
        console.error('Error connecting to the database:', error);
    });
