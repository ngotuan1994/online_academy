const Course = require('../model/Course');
const UsercCourse= require('../model/UserCourse');
const {arrayMongooseObject} = require('../../util/mongoose')
class SiteController{
    // [GET]  /
    index(req,res,next){
        const course = Course.find({});
        course.then(courses =>{
            res.render('home',{courses : arrayMongooseObject(courses)});
        })
        course.catch(next);
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