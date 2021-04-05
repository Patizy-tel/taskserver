var express = require('express');
var router = express.Router();
var VerifyToken = require('./auth/Veryfy');
var DpHd = require('../../models/DepartmentHead');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var bcrypt = require('bcryptjs');
var config = require('../../config/index');
var User = require('../../models/users');


router.post('/'  ,VerifyToken ,(req,res ,next) =>{




   new  DpHd(req.body).save()
                      .then(resp =>{
      
                        var hashedPassword = bcrypt.hashSync(req.body.password,10 );

                        User.create({
                            name : req.body.name,
                            username:req.body.username,
                            role:req.body.role,
                            email : req.body.email,
                            password : hashedPassword
                        }, 
                        function (err, user) {
                            if (err){

                                console.log(err.message)
                                res.status(500).send(err.message);

                            } else{
 // if user is registered without errors
                            // create a token
                            var token = jwt.sign({ id: user._id ,role:user.role , username:user.username}, config.secret, {
                               // expiresIn: 86400 // expires in 24 hours
                                });
    
                                res.status(200).send({ auth: true, token: token });
                                next()
                            }

                           
                        });


    
} )

})



              
    router.get('/',VerifyToken,(req,res ,next)=>{



        DpHd.find({})
            .then(resp=>{


                res.status(200).send(resp)
            }).catch(err=>{


                res.status(404).send(err.message)
            })
      })



      router.get('/:id',VerifyToken,(req,res ,next)=>{



        DpHd.find({id: req.params.id})
            .then(resp=>{
                res.status(200).send(resp)
            }).catch(err=>{


                res.status(404).send(err.message)
            })
      })



      router.get('/listIds',VerifyToken,(req,res ,next)=>{

        DpHd.find({})
           .select({id:1 ,name:1})
            .then(resp=>{


                res.status(200).send(resp)
            }).catch(err=>{


                res.status(404).send(err.message)
            })
      })




      
      router.delete('/:id',VerifyToken,(req,res ,next)=>{



        DpHd.findOneAndDelete({_id: req.params.id})
            .then(resp=>{
                res.status(200).send(resp)
            }).catch(err=>{


                res.status(404).send(err.message)
            })
      })



module.exports = router