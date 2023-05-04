const mongoose = require('mongoose')
const { connectionWithDatabase, connectionState } = require('../../database/databaseConfig')

module.exports = (req,res,next)=>{
    const connection = connectionState()
    if (connection === false) {
        res.status(500)
        return res.render('500');;;;;;;;;;;
    }
    next()
}