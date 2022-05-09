const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const products = require('./routes/products');
const mongoose = require('mongoose')

require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGO_URI)
    .then((result) => app.listen(5000))
    .catch((err) => console.log(Error))

app.use(express.json())
app.use('/products', products)
