const express = require('express');
const Course = require('../model/Course');
const {arrayMongooseObject} = require('../../util/mongoose');
const {mongooseObject} = require('../../util/mongoose');
const Role = require('../model/Role');
const UserCourse = require('../model/UserCourse');

const { requiresAuth } = require('express-openid-connect');


class meController{
    // [GET]  /me/stored/courses

    storedCourses(req,res,next){
        const role = Role.findOne({email: req.oidc.user.email})
        role.then(roles => {
            if(roles.role == "admin"){
                Course.find({})
                .then(courses => res.render('me/storedCourses', { layout: 'admin.handlebars', user: req.oidc.user,
                    courses : arrayMongooseObject(courses)}))
                .catch(next);        
            }
            if(roles.role == "prof"){
                UserCourse.find({email: req.oidc.user.email})
                .then(courses => res.render('me/storedCoursesProf', { layout: 'main.handlebars', user: req.oidc.user,
                    courses : arrayMongooseObject(courses)}))
                .catch(next); 
            }
            if(roles.role =="user"){
                UserCourse.find({email: req.oidc.user.email})
                .then(courses => res.render('me/storedCoursesStudent', { layout: 'user.handlebars', user: req.oidc.user,
                    courses : arrayMongooseObject(courses)}))
                .catch(next);  
            }

        })



        // if(role.role == "prof" || role.role == "admin"){
        //     Course.find({})
        //         .then(courses => res.render('me/storedCourses', {
        //             courses : arrayMongooseObject(courses)}))
        //         .catch(next);
        // }
        // else{
        //     Course.find({})
        //     .then(courses => res.render('me/storedCoursesStudent', {
        //         courses : arrayMongooseObject(courses)}))
        //     .catch(next);
        // }
       

    }



}

module.exports = new meController;