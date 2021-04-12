module.exports.postCreate=(req,res,next)=>{
    var errors=[]
    if(!req.body.name){
      errors.push('Name is reqired!')
    }
    if(!req.body.phone){
      errors.push('Phone is reqired!')
    }
    if(errors.length){
      res.render('users/create',{
        errors:errors,
        values: req.body,
      })
      return;
    }
    next();
}