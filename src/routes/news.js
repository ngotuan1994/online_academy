const express = require('express');

const router = express.Router();
const newController = require('../app/controllers/newcontroller');
const { requiresAuth } = require('express-openid-connect');

router.get('/:id',requiresAuth(), newController.show);
router.get('/',  newController.index );


module.exports = router;
