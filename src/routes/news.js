const express = require('express');

const router = express.Router();
const newController = require('../app/controllers/newcontroller');
router.get('/:id', newController.show);
router.get('/', newController.index );


module.exports = router;
