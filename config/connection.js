//mongodb://localhost:27017/todos
//
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://porus:porusruby@cluster0-rusah.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => {
  console.log('Database connected');
})
.catch(error => {
  console.log(error);
})

const db = mongoose.connection;
module.exports= db;