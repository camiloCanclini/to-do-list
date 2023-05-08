const router = require('express').Router()
const dbIsConnected = require('../controllers/middlewares/dbIsConnected')

const db = require('../database/dbCrud')

router.get('/', dbIsConnected, async (req,res)=>{
    await db.getTasks()
    .then(tasks => {
        res.status(200)
        //console.log(tasks);
        return res.render('index', {tasks: tasks})
    })
    .catch(err => {
        console.log('Error Getting Tasks Loaded In the Database', err)
        res.status(500);
        return res.render('500')
    })
})

router.post('/tasks/create', async (req, res)=>{
    //console.log(req.body);
    await db.createTask(req.body.title, req.body.content)
    .then(()=>{
        console.log('Task Saved!')
        res.status(200)
        res.redirect('/')
    })
    .catch((err)=>{
        console.log('Error Creating New Task!')
        res.status(500)
        res.render('500')
    })
})
router.post('/tasks/update', async (req, res)=>{
    console.log(req.body);
    await db.updateTask(req.body)
    .then(()=>{
        console.log('Task Updated Successfully!')
        res.status(200)
        res.redirect('/')
    })
    .catch((err)=>{
        console.log(err.message);
        console.log('Error Updating Task!')
        res.status(500)
        res.render('500')
    })
})
router.post('/tasks/delete', async (req, res)=>{
    console.log(req.body);
    return await db.deleteTask(req.body.id)
    .then(()=>{
        console.log('Task Deleted Successfully!')
        res.status(200)
        return res.redirect('/')
    })
    .catch((err)=>{
        console.log('Error Deleting Task!')
        res.status(500)
        return res.render('500')
    })
})

module.exports = router