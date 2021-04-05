var express = require('express');
var router = express.Router();
var VerifyToken = require('./auth/Veryfy');
var Tsk = require('../../models/Task');
const verifyToken = require('./auth/Veryfy');

router.post('/', VerifyToken, (req, res) => {

    new Tsk(req.body)
        .save()
        .then(resp => {

            res
                .status(200)
                .send(resp)

        })
        .catch(err => {

            res
                .status(404)
                .send(err.message)
        })

})

router.put('/readid/:id', VerifyToken, (req, res, next) => {
    Tsk
        .findByIdAndUpdate(req.params.id, {read: true})
        .then(resp => {
            res.send(resp)
        })
        .catch(err => {

            res.send(err.message)
        })

})


router.get('/totalTasks' , verifyToken ,(req ,res) =>{


    Tsk.countDocuments({} ,(err ,doc)=>{
       
        res.json(doc)
 
     })
     
     
     






} )
router.get('/:id', VerifyToken, (req, res, next) => {

    Tsk
        .find({creator: req.params.id})
        .then(resp => {

            res
                .status(200)
                .send(resp)
        })
        .catch(err => {

            res
                .status(404)
                .send(err.message)
        })
})

router.get('/mytask/:id', VerifyToken, (req, res, next) => {

    Tsk
        .find({EmplyoyeeName: req.params.id})
        .sort({date: 1})
        .then(resp => {

            res
                .status(200)
                .send(resp)
        })
        .catch(err => {

            res
                .status(404)
                .send(err.message)
        })
})

router.delete('/:id', VerifyToken, (req, res, next) => {

    Tsk
        .find({id: req.params.id})
        .then(resp => {
            res
                .status(200)
                .send(resp)
        })
        .catch(err => {

            res
                .status(404)
                .send(err.message)
        })
})







module.exports = router