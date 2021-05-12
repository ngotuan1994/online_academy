const Course = require('../model/Course');
const Role = require('../model/Role');
const UserCourse= require('../model/UserCourse');
const {arrayMongooseObject} = require('../../util/mongoose')
class SiteController{
    // [GET]  /
    index(req,res,next){
        Role.findOne({email : req.oidc.user.email})
        .then(role =>{
            if ( role.role == 'admin'){
                const course = Course.find({});
                course.then(courses =>{
                    res.render('home',{layout: 'admin.handlebars',courses : arrayMongooseObject(courses) , user: req.oidc.user });
                })
                course.catch(next);
            }
            else if ( role.role == 'prof'){
                const course = Course.find({});
                course.then(courses =>{
                    res.render('home',{layout: 'main.handlebars',courses : arrayMongooseObject(courses) , user: req.oidc.user });
                })
                course.catch(next);
            }
            else{
                const course = Course.find({});
                course.then(courses =>{
                    res.render('home',{layout: 'user.handlebars',courses : arrayMongooseObject(courses) , user: req.oidc.user });
                })
                course.catch(next);
            }
        })
        .catch(next);
        // else if( Role.find({ email : req.oidc.user.email, role : 'prof' })){
            // const course = Course.find({});
            // course.then(courses =>{
            //     res.render('home',{layout: 'main.hangdlebars',courses : arrayMongooseObject(courses) , user: req.oidc.user });
            // })
            // course.catch(next);
        // }
        // else{
        //     const course = Course.find({});
        //     course.then(courses =>{
        //         res.render('home',{ layout : 'user.handlebars',courses : arrayMongooseObject(courses) , user: req.oidc.user });
        //     })
        //     course.catch(next);
        // }
                
    }
    // [GET]  /search
    landing(req,res){
        res.render('index', {layout: 'landing.handlebars'});
    }
    // addcourses(req,res,next){
    //     const usercourses = UsercCourse.insertOne({
    //         email : req.body.email
    //         courses.pushback
    //     })
    // }
}

module.exports = new SiteController;