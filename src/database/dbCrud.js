const taskModel = require('./models/Task');

async function createTask(title, content) {
   const task = new taskModel({title: title, content: content})
   return await task.save();
}
async function getTasks() {
   return await taskModel.find();
}
/*
createTask()
    .then(()=>console.log('New Task Saved!'))
    .catch(err=>console.log('Error Saving Task!'))
 */
/* findTasks()
    .then((tasks)=>console.log(tasks))
    .catch(err=>console.log('Error Finding Tasks!'))
 */
module.exports = {
   createTask,
   getTasks

}