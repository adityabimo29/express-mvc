//require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const expressJWT = require('express-jwt');
var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var todosRouter = require('./routes/todos');
var usersRouter = require('./routes/users');
var jobsRouter = require('./routes/jobs');

var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressJWT({secret:'SECRET'}).unless({
    path:[
        {url: '/', methods:['GET']},
        {
            url:'/users/login',
            methods:['POST']
        }
    ]
}));

app.use((err,req,res,next)=>{
    if(err.name === 'UnauthorizedError'){
        return res.status(401).send({message:'You are not member'})
    }else{
        return next();
    }
})

app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/todos',todosRouter);
app.use('/users',usersRouter);
app.use('/jobs',jobsRouter);
app.use('/assets',express.static('assets'));
module.exports = app;
