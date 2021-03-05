const express = require('express');

const router = express.Router();
const meController = require('../app/controllers/meController');
const { requiresAuth } = require('express-openid-connect');

router.get('/stored/courses',requiresAuth(), meController.storedCourses);

module.exports = router;