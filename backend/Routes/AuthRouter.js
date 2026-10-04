const{ signupValidation } = require('../Middlewares/AuthValidation');
const {signup} = require('../Contollers/AuthController');

const router = require('express').Router();


router.post('/login',(req,res)=>{
    res.send('login sucess');
});

router.post('/signup',signupValidation,signup);

module.exports = router;