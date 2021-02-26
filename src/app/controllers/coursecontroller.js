//Creating courses and to check if the course is created
const express = require('express');
const Course = require('../model/Course');
const {mongooseObject} = require('../../util/mongoose');
const { renderSync } = require('node-sass');
class SiteController{
    // [GET]  /
    show(req,res,next){
        const course = Course.findOne({name: req.params.courseName});
        course.then(courses =>{
            res.render('courses/show',{courses : mongooseObject(courses)});
        })
        course.catch(next);

    };
    //get   /courses/create
    create(req,res,next){
        res.render('courses/create');
    };

    //post /course/store
    store(req,res,next){
        const course = new Course(req.body);
        course.save();
        res.send("Sucess!");

    }
    
}

module.exports = new SiteController;
