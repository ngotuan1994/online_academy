const express = require('express');
const Course = require('../model/Course');
const {arrayMongooseObject} = require('../../util/mongoose');
const {mongooseObject} = require('../../util/mongoose');
const Role = require('../model/Role');
const { requiresAuth } = require('express-openid-connect');

class adminController{
    setrole(req,res,next){
        res.render('admin/setRoles');
    }
    updaterole(req,res,next){

        const tmp = req.body.role;
        Role.updateOne({role: tmp})
            .then(()=>
                res.redirect('/admin/listuser'))
            .catch(next);
    }
    listuser(req,res,next){
        const role = Role.find({});
        role.then(roles =>res.render('admin/listuser', {
            roles : arrayMongooseObject(roles)}))
        .catch(next);            
    }
    addrole(req,res,next){
        const role = new Role(req.body);
        role.save();
        res.redirect("/admin/listuser");
    }

}

module.exports = new adminController;