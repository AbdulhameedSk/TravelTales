const express = require('express');
const { getAllUsers, regesterController, loginController } = require('../controller/userController');
const router=express.Router()
router.get("all-users",getAllUsers)
router.post("/regester",regesterController)
router.post("/login",loginController)
module.exports=router;