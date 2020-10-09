const db = require('./dbconfig')

module.exports = {
    find,
    remove,
    add
}

function find () {
    return db('heros')
}

function remove (id) {
    return db('heros')
        .where({id})
        .del()
}

function add(body){
    return db('heros')
        .insert(body)
}