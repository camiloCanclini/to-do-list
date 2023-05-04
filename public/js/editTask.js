
function convertToInput (taskCardElem){
    
    const info = taskCardElem.querySelector('.task_info')
    console.log(info);
    
    // There are the info of the task 
    const infoElements = Array.from(info.children)
    console.log(infoElements[0].innerText);

    // Getting the inputs that will showing
    const task_inputs = info.getElementsByClassName('task_inputs')
    console.log(task_inputs);
    const inputs = Array.from(task_inputs)
    console.log(inputs[0]);
    
    // Hidding the previous info
    infoElements[0].setAttribute('hidden', "")
    infoElements[1].setAttribute('hidden', "")
    
    // Showing the inputs for edit the task info
    inputs[0].removeAttribute('hidden')

    // Copy the previous info to the inputs
    const titleInput = inputs[0].children[0]
    const contentInput = inputs[0].children[1]
    console.log(contentInput);
    
    // Setting the values of the inputs
    titleInput.setAttribute('value', infoElements[0].innerText)
    contentInput.textContent = infoElements[1].innerText
}

// Listening Each Edit Button 
const editButtons = Array.from(document.getElementsByClassName('editButton'));
editButtons.forEach(button => {
    button.addEventListener('click',e=>{
        console.log(e);
        // hidding options buttons
        const taskOptions = e.target.closest('.task_options')
        taskOptions.classList.remove('d-flex')
        taskOptions.classList.add('d-none')
        // showing confirm button
        const confirmButton = taskOptions.nextElementSibling;
        console.log(confirmButton);
        confirmButton.removeAttribute('hidden')
        console.log(e.target.closest('.task'))
        convertToInput(e.target.closest('.task'))
    })
});