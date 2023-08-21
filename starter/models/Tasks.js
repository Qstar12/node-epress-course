const mongoose = require('mongoose')

// Schema give structure to our data
// Schema is a blueprint of our data
// Schema is a class
// Schema is a constructor function
// Schema is a model
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxLength: [20, 'name can not be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false,

    },
})



module.exports = mongoose.model('Task', TaskSchema)