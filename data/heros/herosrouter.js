const db = require('./herosmodel');

const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    db.find()
        .then(heros => {
            res.status(200).json(heros)
        })
        .catch(err => {
            console.log('err from catch:',err)
            res.status(500).json({message:'failed'})
        })
})

router.delete('/:id', (req,res) => {
    const {id} = req.params
    db.remove(id)
        .then(heros => {
            res.status(200).json(heros)
        }) 
        .catch(err => {
            res.status(500).json({message:'failed'})
        })
})

module.exports = router