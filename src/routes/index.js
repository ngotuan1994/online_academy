const siteRouter = require('./site');
const newRouter = require('./news');
const courseRouter = require('./courses');
const meRouter = require('./me');

const siteController = require('../app/controllers/siteController');
const { requiresAuth } = require('express-openid-connect');
function route(app){
    app.use('/profile', requiresAuth(), (req, res) => {
        res.send(JSON.stringify(req.oidc.user));
      });
    app.use('/news',requiresAuth(), newRouter);
    app.use('/courses',requiresAuth(),courseRouter);
    app.use('/me',requiresAuth(), meRouter);
    app.use('/',siteRouter);


}

module.exports = route