const elements = Array.from(document.getElementsByClassName('editButton'));

console.log(elements);

elements.forEach(button => {
    button.addEventListener('click',e=>{
        //console.log(e.taget);
        const taskCard = e.target.closest('.task')
        const idTaskSelected = taskCard.getAttribute('data-id');
        console.log(idTaskSelected);
        body = JSON.stringify({ id: idTaskSelected }) 
        e.target.closest('.task_options').
        console.log(e.target.closest('.task_options')); 
    })
});