const express = require('express');

const router = express.Router();
const siteController = require('../app/controllers/siteController');
const { requiresAuth } = require('express-openid-connect');

router.use('/search',requiresAuth(),  siteController.search);
router.use('/', siteController.index );


module.exports = router;
