const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const path = require('path')

const connectDB = require('./database/mongo');
const User = require('./models/Users');
const Blog = require('./models/Blogs');

const readRouter = require('./routes/readRoute');
const articlesRouter = require('./routes/articlesRoute');
const searchRouter = require('./routes/searchRoute');
const deleteRouter = require('./routes/deleteRoute');
const writeRouter = require('./routes/writeRoute');
const editRouter = require('./routes/editRoute');
const signupRouter = require('./routes/signupRoute');
const loginRouter = require('./routes/loginRoute');
const aboutRouter = require('./routes/aboutRoute');

dotenv.config({path:'config.env'})

const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'assets')))

app.use('/read' , readRouter);
app.use('/articles', articlesRouter);
app.use('/search' , searchRouter);
app.use('/delete', deleteRouter);
app.use('/write', writeRouter);
app.use('/edit', editRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter)
app.use('/', aboutRouter)

app.set('view engine','ejs');

app.listen(PORT, ()=>{
    console.log(`SERVER LISTENING ON ${PORT}...`)
    connectDB();
});




