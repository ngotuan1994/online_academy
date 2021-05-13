const mongoose = require('mongoose');

const Role = mongoose.Schema({
    email:{
        type:String,
        maxLength:255
    },
    role:{
        type:String,
        maxLength:255

    }
});

module.exports = mongoose.model('Role',Role,"Roles");
