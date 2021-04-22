const express = require('express');
const Course = require('../model/Course');
const {mongooseObject, arrayMongooseObject} = require('../../util/mongoose');
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
    //get   /courses/:id/edit
    edit(req,res,next){
        Course.findById(req.params.id)
            .then(course=> res.render('courses/edit',{ 
                course: mongooseObject(course)
            }))
            .catch(next);
    };
    //put /courses/:id
    update(req,res,next){
        Course.updateOne({_id: req.params.id}, req.body)
            .then(()=>
                res.redirect('/me/stored/courses'))
            .catch(next);
    }
    destroy(req,res,next){
        Course.deleteOne({_id: req.params.id})
            .then( ()=> res.redirect('back'))
            .catch(next)
    }

}

module.exports = new SiteController;