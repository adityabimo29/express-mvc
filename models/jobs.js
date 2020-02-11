const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    level:{
        type:String
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    }
});

const Jobs = mongoose.model('jobs',JobSchema);

module.exports = Jobs;