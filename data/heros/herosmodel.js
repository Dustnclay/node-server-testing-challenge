const db = require('./dbconfig')

module.exports = {
    find,
    remove
}

function find () {
    return db('heros')
}

function remove (id) {
    return db('heros')
        .where({id})
        .del()
}