const db=require('../db')
const md5 = require('md5');

module.exports.login =(req,res)=>{
        res.render('auth/login')
}

module.exports.postLogin=(req,res)=>{
    var email=req.body.email;
    var password=req.body.password;

    var user = db.get('users').find({email:email}).value()

    if(!user){
        res.render('auth/login',{
            errors:[
                'User does not exist !'
            ],
            values:req.body
        });
        return;
    }

    var hashPass=md5(password)

    if(user.password !== hashPass){
        res.render('auth/login',{
            errors:[
                'Wrong password !'
            ],
            values:req.body
        });
        return;
        
    }

    res.cookie('userid',user.id)

    res.redirect('/users')
}