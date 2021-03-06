const db=require('../db')
const shortid = require('shortid');

module.exports.index = (req,res)=>{
        res.render('users/index',{
          // get all data from db.dafaults({ users : []})
          users: db.get('users').value()
        })
}

module.exports.search= (req,res)=>{
    var q=req.query.q;
    var matchValue = db.get('users').value().filter(function(user){
      return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;

    })
    res.render('users/index',{users:matchValue})
}

module.exports.create= (req,res)=>{
  console.log(req.cookies)
    res.render('users/create')
}

module.exports.get=(req,res)=>{
        var id=req.params.id;
        var user=db.get('users').find({id:id}).value();
        res.render('users/view',{user:user});
}

module.exports.postCreate=(req,res)=>{
    req.body.id=shortid.generate();
    req.body.avatar = req.file.path.split('\\').slice(1).join('\\')
    db.get('users').push(req.body).write(); 
    res.redirect('/users')
}