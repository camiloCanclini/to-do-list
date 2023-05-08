const taskModel = require('./models/Task');

async function createTask(title, content) {
   const task = new taskModel({title: title, content: content})
   return task.save();
}
function getTasks() {
   return taskModel.find();
}
function getOneTask(id) {
   if (typeof id === 'undefined'|| id == null) {
      throw new Error('getOneTask Needs an id Arg!')
   }
   return taskModel.findById({_id: id});
}
async function deleteTask(id) {
   if (typeof id === 'undefined'|| id == null) {
      throw new Error('deleteTask Needs an id Arg!')
   }
   return taskModel.findByIdAndDelete({_id: id});
}
async function updateTask(requestObj) {

   const id = requestObj.id;
   const newTitle = requestObj.title;
   const newContent = requestObj.content;
   const newState = requestObj.state;

   console.log(id);
   
   if (typeof id === 'undefined'|| id == null) {
      throw new Error('updateTask Needs an id Arg!')
   }
   
   const updateQuery = {}

   // If the passed argument is empty, then it wont be saved on the updateQuery
   if (!(typeof newTitle === 'undefined'|| newTitle == null )) {
      updateQuery.title = newTitle // Saving a new attribute based on the arg passed
   }
   if (!(typeof newContent === 'undefined'|| newContent == null)) {
      updateQuery.content = newContent // Saving a new attribute based on the arg passed
   }
   if (!(typeof newState === 'undefined'|| newState == null )) {
      updateQuery.state = newState // Saving a new attribute based on the arg passed
   }

   console.log(updateQuery);

   return taskModel.findByIdAndUpdate({_id: id},updateQuery);
}

   /*
createTask()
    .then(()=>console.log('New Task Saved!'))
    .catch(err=>console.log('Error Saving Task!'))
 */
/* updateTask("6433604f6e913f6cfe2b602d", "My Second Taskkkkk", "Here is the New Content!!!")
    .then((tasks)=>console.log('Task Updated!'))
    .catch(err=>console.log('Error Finding Tasks!', err)) */

module.exports = {
   createTask,
   getTasks,
   updateTask,
   deleteTask
}