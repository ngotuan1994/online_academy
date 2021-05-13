const express = require('express');

const router = express.Router();
const adminController = require('../app/controllers/adminController');
const { requiresAuth } = require('express-openid-connect');
const {authenreq , authenRoleAdmin , authenRoleProf} = require('../config/auth/auth')

router.get("/setrole",requiresAuth(), authenRoleAdmin, adminController.setrole);
router.put("/updaterole",requiresAuth(), authenRoleAdmin, adminController.updaterole);
router.get("/listuser",requiresAuth(),authenRoleAdmin, adminController.listuser);
router.post("/addrole",requiresAuth(),authenRoleAdmin, adminController.addrole);
module.exports = router;

