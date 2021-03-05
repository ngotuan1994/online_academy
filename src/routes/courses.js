const express = require('express');

const router = express.Router();
const courseController = require('../app/controllers/coursecontroller');
const { requiresAuth } = require('express-openid-connect');

router.get('/create',requiresAuth(), courseController.create);
router.get('/:courseName',requiresAuth(), courseController.show);
router.post('/store',requiresAuth(),courseController.store);
router.get('/:id/edit',courseController.edit);

module.exports = router;