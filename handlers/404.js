'use strict'
module.exports=(req,res)=>{
    let obj={
        error:404,
        route:req.path,
        message:'not Found ‼❌ '
        
    

    }
    res.status(404).send(obj)
}
