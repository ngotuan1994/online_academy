const express = require('express');

const router = express.Router();
const siteController = require('../app/controllers/siteController');
const { requiresAuth } = require('express-openid-connect');

router.use('/home',requiresAuth(), siteController.index );
router.use('/', siteController.landing);

module.exports = router;
