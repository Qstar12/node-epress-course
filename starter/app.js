require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const port = 3000


// middleware we have to use this or we will not have access to req.body
app.use(express.static('./public'))
app.use(express.json())
// routes

// tasks routes
app.use('/api/v1/tasks', tasks)


// ap.get('api/v1/tasks') // get all tasks
// app.post('api/v1/tasks') // create new task
// ap.get('api/v1/tasks/:id') // get single task
// ap.patch('api/v1/tasks/:id') // update task
// ap.delete('api/v1/tasks/:id') // delete task


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is running on port ${port}`))
    } catch (error) {
        console.log(error)
    }

}

start()


