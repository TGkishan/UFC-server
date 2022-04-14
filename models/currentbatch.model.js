const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Member schema
const currentbatch = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },title:{
        type:String,
        required:true
    },completed:{
        type:String,
        required:true
    },userId:{
        type:String,
        required:true        
    }
});

const Currentbatch = mongoose.model('CURRENTBATCH',currentbatch);
module.exports = Currentbatch;

// id
// time
// date