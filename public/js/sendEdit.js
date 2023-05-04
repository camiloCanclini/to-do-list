const confirmButtons = Array.from(document.getElementsByClassName('confirmEditButton'));
confirmButtons.forEach(button => {
    button.addEventListener('click',e=>{
        const task = e.target.closest('.task')
        const idTask = task.getAttribute('data-id');
        const inputs = Array.from(task.getElementsByClassName('task_inputs'))[0].children;
        //console.log(inputs); 
        const newTitle = inputs[0].value
        const newContent = inputs[1].value
        //console.log(newContent);
        //console.log(idTask);
        const bodyRequest = JSON.stringify( {
            id: idTask,
            title: newTitle,
            content: newContent
        });
        fetch('/tasks/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: bodyRequest
        })
        .then(response => {
            if (response.status == 200) {
                Swal.fire({
                    title: 'Edited!',
                    text: "Task Has Been Edited Successfully",
                    icon: 'success',
                    showConfirmButton: false // Oculta el botón "Ok"
                }).then()
                    setTimeout(()=>{window.location.href = '/'}, 1000)
                    
            }else{
                Swal.fire(
                    'Error!',
                    'Operation Failed',
                    'error'
                  )
            }
        })
    })
});