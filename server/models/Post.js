const mongoose = require('mongoose'); 

const Schema = mongoose.Schema ; 

const Postschema = new Schema({
    title: {
        type: String, 
        required: true
    }, 
    body: {
        type: String, 
        required: true
    },
    createdAt: {
        type:Date ,
        default :Date.now
    },
    updatedAt:{
        type:Date ,
        default :Date.now
    }
}); 

module.exports = mongoose.model('Post' , Postschema) ; 