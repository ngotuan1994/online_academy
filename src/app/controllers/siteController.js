const Course = require('../model/Course');
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
}

module.exports = new SiteController;