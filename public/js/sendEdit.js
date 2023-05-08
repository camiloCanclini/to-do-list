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

const stateBtns = Array.from(document.getElementsByClassName('state_btns')); 
stateBtns.forEach((btns)=>{
    console.log(Array.from(btns.children));
    Array.from(btns.children).forEach((btn)=>{
        btn.addEventListener('click',()=>{
            const btnClasses = btn.className;
            const taskId = btn.closest(".task").getAttribute("data-id")
            if (btnClasses.includes("doneBtn")) {
                fetch('/tasks/update',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: taskId,
                        state:"done"
                    })
                })
                .then((response)=>{
                    if (response.status == 500) {
                        Swal.fire(
                            'Error!',
                            'Operation Failed',
                            'error'
                          )
                    }else{
                        Swal.fire({
                            title: 'Edited!',
                            text: "Task Has Been Edited Successfully",
                            icon: 'success',
                            showConfirmButton: false // Oculta el botón "Ok"
                        }).then()
                            setTimeout(()=>{window.location.href = '/'}, 1000)
                    }
                })
                .catch((response)=>{
                    Swal.fire(
                        'Error!',
                        'Operation Failed',
                        'error'
                      )
                })
            }else{
                if (btnClasses.includes("failedBtn")) {
                    fetch('/tasks/update',{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            id: taskId,
                            state:"failed"
                        })
                    })
                    .then((response)=>{
                        if (response.status == 500) {
                            Swal.fire(
                                'Error!',
                                'Operation Failed',
                                'error'
                              )
                        }else{
                            Swal.fire({
                                title: 'Edited!',
                                text: "Task Has Been Edited Successfully",
                                icon: 'success',
                                showConfirmButton: false // Oculta el botón "Ok"
                            }).then()
                                setTimeout(()=>{window.location.href = '/'}, 1000)
                        }
                    })
                    .catch(()=>{
                        Swal.fire(
                            'Error!',
                            'Operation Failed',
                            'error'
                          )
                    })
                } else {
                    Swal.fire(
                        'Error!',
                        'Operation Failed',
                        'error'
                      )
                }
            }
        })
    })
})

const undoBtns = Array.from(document.getElementsByClassName('undo_btn'));
undoBtns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        const taskId = btn.closest(".task").getAttribute("data-id")
        fetch('/tasks/update',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: taskId,
                state:"pending"
            })
        })
        .then((response)=>{
            if (response.status == 500) {
                Swal.fire(
                    'Error!',
                    'Operation Failed',
                    'error'
                  )
            }else{
                Swal.fire({
                    title: 'Edited!',
                    text: "Task Has Been Edited Successfully",
                    icon: 'success',
                    showConfirmButton: false // Oculta el botón "Ok"
                }).then()
                    setTimeout(()=>{window.location.href = '/'}, 1000)
            }
        })
        .catch((response)=>{
            Swal.fire(
                'Error!',
                'Operation Failed',
                'error'
              )
        })
    }) 
})
