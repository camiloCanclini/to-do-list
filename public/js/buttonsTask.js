const tasks = Array.from(document.getElementsByClassName('task'));
tasks.forEach(task => {
    const options = task.getElementsByClassName('task_options')[0];
    const undoBtn = task.getElementsByClassName('undo_btn')[0];
    console.log(options);
    if (task.getAttribute('data-state')=='done' || task.getAttribute('data-state')=='failed') {
        options.classList.remove('d-flex')
        options.classList.toggle('d-none')
        undoBtn.classList.toggle('d-flex')
    }
    undoBtn.addEventListener("click",()=>{
        /* Fetch Feature*/
    })
});