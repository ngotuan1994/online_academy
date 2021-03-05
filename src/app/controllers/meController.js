const express = require('express');
const Course = require('../model/Course');
const {arrayMongooseObject} = require('../../util/mongoose');


class meController{
    // [GET]  /me/stored/courses

    storedCourses(req,res,next){
        Course.find({})
            .then(courses => res.render('me/storedCourses', {
                courses : arrayMongooseObject(courses)}))
            .catch(next);
       

    }
    
}

module.exports = new meController;