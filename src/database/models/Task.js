const {Schema, model} = require( 'mongoose' )

const taskSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    content: {
        type:String,
        required: true
    },
    state: {
        type: String,
        required: true,
        default: 'pending',
        enum: ['pending', 'done', 'failed']
    }
})

module.exports = model('Task', taskSchema);