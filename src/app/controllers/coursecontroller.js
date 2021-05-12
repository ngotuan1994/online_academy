const express = require('express');
const Course = require('../model/Course');
const {mongooseObject, arrayMongooseObject} = require('../../util/mongoose');
const { renderSync } = require('node-sass');
const UserCourse = require('../model/UserCourse'); 
class SiteController{
    // [GET]  /
    show(req,res,next){
        const course = Course.findOne({name: req.params.courseName});
        course.then(courses =>{
            res.render('courses/show',{courses : mongooseObject(courses),user: req.oidc.user});
        })
        course.catch(next);

    };
    //get   /courses/create
    create(req,res,next){
        res.render('courses/create',{user: req.oidc.user});
    };

    //post /course/store
    store(req,res,next){
        const course = new Course(req.body);
        course.save();
        UserCourse.findOneAndUpdate({email : req.oidc.user.email},{
            email: req.oidc.user.email,
            $addToSet: { courses: req.body.name}
        },{upsert : true , new : true})
        .then(()=> 
                res.redirect("/home"))
        .catch(next);

    }
    //get   /courses/:id/edit
    edit(req,res,next){
        Course.findOne({name: req.params.id})
            .then(course=> res.render('courses/edit',{ 
                course: mongooseObject(course) , user: req.oidc.user
            }))
            .catch(next);
    };
    //put /courses/:id
    update(req,res,next){
        Course.updateOne({_id: req.params.id}, req.body)
            .then()
            .catch(next);
        UserCourse.updateOne({courses : req.params.name}, {
                $set : { 'courses.0' : req.body.name}
                // $pull : {courses : req.params.name},
                // $addToSet : {courses : req.body.name} 
            })
            .then( ()=>{
                res.redirect('/home');
            })
            .catch(next);
    }
    destroy(req,res,next){
        Course.deleteOne({name: req.params.id})
            .then()
            .catch(next)
        UserCourse.findOneAndUpdate({email: req.oidc.user.email},{
            $pull : {courses :req.params.id}
        })
            .then( ()=> res.redirect('/home'))
            .catch(next)

    }
    //                 /courses/:id/delete
    delete(req,res,next){
        UserCourse.findOneAndUpdate({email: req.oidc.user.email},{
            $pull : {courses :req.params.id}
        })
            .then( ()=> res.redirect('back'))
            .catch(next)
    }
    //put /coruses/student/:coursesname
    upsert(req,res,next){
        UserCourse.findOneAndUpdate({email : req.oidc.user.email},{
            email: req.oidc.user.email,
            $addToSet: { courses: req.params.id}
        },{upsert : true , new : true}
        )
            .then(()=> 
                res.redirect("/home"))
            .catch(next);
    }

}

module.exports = new SiteController;