var express = require('express');
var router = express.Router();
var VerifyToken = require('./auth/Veryfy');
var Rp = require('../../models/Reports');

router.get('/totalReports', VerifyToken, (req, res) => {

    Rp.countDocuments({}, (err, doc) => {

        console.log(doc)
        res.json(doc)

    })

})

router.post('/', VerifyToken, (req, res) => {

    new Rp(req.body)
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

router.get('/head/:id', VerifyToken, (req, res, next) => {

    Rp
        .find({HeadName: req.params.id})
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

router.get('/myreport/:id', VerifyToken, (req, res, next) => {

    Rp
        .find({creator: req.params.id})
        .sort({date: -1})
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

    Rp
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