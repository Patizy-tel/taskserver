var express = require('express');
var router = express.Router();
var VerifyToken = require('./auth/Veryfy');
var Dp = require('../../models/Departments');



router.post('/',VerifyToken ,(req,res) =>{

   new  Dp(req.body).save()
                      .then(resp =>{

                        res.status(200).send(resp)
      
                    
                        }).catch(err =>{

                            res.status(404).send(err.message)
                        })


    

})



              
    router.get('/',VerifyToken,(req,res ,next)=>{

        Dp.find({})
            .then(resp=>{


                res.status(200).send(resp)
            }).catch(err=>{


                res.status(404).send(err.message)
            })
      })



      router.get('/totalDepartments' , VerifyToken ,(req ,res) =>{


        Dp.countDocuments({} ,(err ,doc)=>{
       
            res.json(doc)
     
         })
         
         
         

    
    } )


                
    router.get('/listIds',VerifyToken,(req,res ,next)=>{

        Dp.find({})
           .select({id:1 ,name:1})
            .then(resp=>{


                res.status(200).send(resp)
            }).catch(err=>{


                res.status(404).send(err.message)
            })
      })




      router.get('/:id',VerifyToken,(req,res ,next)=>{

        Dp.find({id: req.params.id})
            .then(resp=>{
                res.status(200).send(resp)
            }).catch(err=>{


                res.status(404).send(err.message)
            })
      })




      
      router.delete('/:id',VerifyToken,(req,res ,next)=>{



        Dp.findOneAndDelete({name: req.params.id})
            .then(resp=>{
                res.status(200).send(resp)
            }).catch(err=>{


                res.status(404).send(err.message)
            })
      })




 

module.exports = router