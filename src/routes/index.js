const express = require('express');
const siteRouter = require('./site');
const newRouter = require('./news');
const courseRouter = require('./courses');
const meRouter = require('./me');
const Course = require('../app/model/Course');
const Role = require('../app/model/Role');

const siteController = require('../app/controllers/siteController');
const { requiresAuth } = require('express-openid-connect');
const {  authenreq , authenRoleAdmin, authenRoleProf } = require('../config/auth/auth');
const { renderSync } = require('node-sass');
function route(app){
    app.use('/profile', requiresAuth(), (req, res) => {
      // res.send(JSON.stringify(req.oidc.user));
      
      res.render("profile", {
        user: req.oidc.user,
        title: 'Profile Page',

      });
  });
  // function authenRole(req,res,next){
  //   const role = Role.findOne({email: req.oidc.user.email});
 
  //   role.then(roles => {
  //       if(roles.role !== "admin"){
  //         res.status(401).send("Not Allowed")
  //       }
  //       next();
  //   })
  //   role.catch(next)
    
  // }
    app.use('/testing',requiresAuth(),authenRoleAdmin,(req,res,next)=>{
      
      // const role = Role.findOne({email: req.oidc.user.email});
      //   role.then(roles =>{
      //       if(roles.role == "admin")
      //         res.send(roles.role + " route")
      //       else
      //         res.status(401).send("Not Allowed")
      //   })
      //   role.catch(next);
      res.send("Admin route")
    })
    app.use('/testingprof',requiresAuth(),authenRoleProf , (req,res,next)=>{
      res.send("Admin and Prof are both can access this route")
    })


    app.use('/news',requiresAuth(), newRouter);
    app.use('/courses',requiresAuth(),courseRouter);
    app.use('/me',requiresAuth(), meRouter);
    app.use('/',siteRouter);


}

module.exports = route