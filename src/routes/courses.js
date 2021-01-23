const express = require('express');

const router = express.Router();
const courseController = require('../app/controllers/coursecontroller');

router.get('/create', courseController.create);
router.get('/:courseName', courseController.show);
router.post('/store',courseController.store);

module.exports = router;