const router = require('express').Router()
const dbCrud = require('../database/dbCrud')

router.get('/', async (req,res)=>{
    
    const tasks = await dbCrud.getTasks()
    .then(tasks => {
        return tasks
    })
    .catch(err => console.log('Error Getting Tasks Loaded In the Database', err))
    res.status(200)
    //console.log(tasks);
    res.render('index', {tasks: tasks})
    
})

router.post('/newTask', async (req, res)=>{
    console.log(req.body);
    await dbCrud.createTask(req.body.title, req.body.content)
    .then(()=>{
            console.log('Task Saved!')
            res.status(200)
            res.redirect('/')
        })  
        .catch((err)=>{
            console.log('Error Creating New Task!',err)
            res.status(500)
            res.render('500')
        })
})
module.exports = router