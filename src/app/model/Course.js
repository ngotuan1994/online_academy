//Creating the course, inserting the name image, but to also update it.
const mongoose = require('mongoose');

const Course = mongoose.Schema({
    name:{
        type:String,
        maxLength:255
    },
    description:{
        type:String,
        maxLength:255

    },
    image:{
        type:String,
        maxLength:255

    },
    createAt:{
        type: Date,
        default: Date.now
    },
    updateAt:{
        type: Date,
        default: Date.now
    }
    
});

module.exports = mongoose.model('Course',Course);
