const db = require('../databaseConfig');

const taskSchema = new db.Schema({
    title: {
        type:String,
        required: true
    },
    content: {
        type:String,
        required: true
    }
})

module.exports = db.model('Task', taskSchema);