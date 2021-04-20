const db=require('../db')
const shortid = require('shortid');

module.exports.create=(req,res,next)=>{
    res.render('./transfer/create',{csrfToken: req.csrfToken()})
}

module.exports.postCreate=(req,res,next)=>{
    var dataTransfer={
        id: shortid.generate(), 
        amount : parseInt(req.body.amount) ,
        accountId : req.body.accountId,
        userId : req.signedCookies.userId
    }
    db.get('transfer').push(dataTransfer).write()
    res.redirect('/transfer/create')

}