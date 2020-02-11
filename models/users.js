  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
  
  const todoSchema = new Schema({
      firstname:{
        type:String,
        required:true
      },
      lastname:{
        type:String
      },
      username:{
        type:String,
        required:true
      },
      address:{
        type:String
      },
      email:{
        type:String,
        required:true
      },
      password:{
        type:String,
        required:true
      },
      age:{
        type:String
      }
  })
  
  
  const Users = mongoose.model("users",todoSchema);
  
  module.exports = Users;