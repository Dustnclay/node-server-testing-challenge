const express = require('express');

// const heroRouter = require('./data/heros/herosrouter')

const server = express();

const db = require('./data/heros/herosmodel')

server.use(express.json())

server.get('/heros', (req,res) => {
    db.find()
        .then(heros => {
            res.status(200).json(heros)
        })
        .catch(err => {
            console.log('err from catch:',err)
            res.status(500).json({message:'failed'})
        })
})

server.post('/heros', (req,res) => {
    const hero = req.body
    db.add(hero)
        .then(heros => {
            res.status(200).json(heros)
        })
        .catch(err => {
            console.log('err from catch:',err)
            res.status(500).json({message:'failed'})
        })
})

server.delete('/heros/:id', (req,res) => {
    const {id} = req.params
    db.remove(id)
        .then(heros => {
            res.status(200).json(heros)
        }) 
        .catch(err => {
            res.status(500).json({message:'failed'})
        })
})

module.exports = server;