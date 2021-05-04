const mongoose = require('mongoose');

const UserCourse = mongoose.Schema({
    email:{
        type:String,
        maxLength:255
    },
    courses: [String]
});

module.exports = mongoose.model('UserCourse',UserCourse,"UserCourses");
