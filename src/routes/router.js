const router = require('express').Router()


router.get('/',(req,res)=>{
    res.status(200)
    res.render('index')
})

module.exports = router