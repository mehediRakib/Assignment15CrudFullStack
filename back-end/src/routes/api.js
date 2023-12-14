const express=require('express');
const router=express.Router();
const formController=require('../controller/formController');


router.post('/createForm',formController.createForm);
router.get('/listForm',formController.listForm);
router.post('/updateform/:ID',formController.updateForm)
router.get('/deleteForm/:ID',formController.deleteForm);
router.get('/listById/:ID',formController.listById)


module.exports=router;