exports.error404=(req,res,next)=>{
    res.render('404',{
        title : 'Error',
        path : '/404'
    });
}

