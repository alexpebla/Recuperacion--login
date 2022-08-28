const express = require('express');
// import express from 'express'
var morgan = require('morgan');
// import morgan from 'morgan';
var cors = require('cors');
// import cors from 'cors';
var mongoose = require('mongoose');
// import mongoose from 'mongoose';
const router = require('./routes');
// import apiRouter from './routes/index';
const mainRouter = require("./routes/mainRoutes")
const path = require("path")

//conexión a la base de datos
// const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const urlDB = 'mongodb://localhost:27017/dbsistema';
mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(mongoose => console.log('Conectado on 27017'))
.catch(err => console.log(err))

const app = express();
app.use(morgan('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app. set('view engine', 'ejs')
app.use(express.static('public'));

//rutas
app.use('/api', router);

app.set('PORT', process.env.PORT || 3000);

app.use("/",mainRouter)

// app.get ("/login",(req, res) => {
//  res.render('login')
// })

//middleware



app.listen(app.get('PORT'), () => {
  console.log(`Server started on port: ${app.get('PORT')}`);
});

app.get('/', (req,res) => {
    res.send('Hello word');
       
})