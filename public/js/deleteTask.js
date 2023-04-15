const deleteButtons = Array.from(document.getElementsByClassName('deleteButton'));
console.log(deleteButtons);
//console.log(deleteButtons.attributes.getNamedItem('data-id').value);

deleteButtons.forEach(button => {
    button.addEventListener('click',e=>{
        //console.log(e.taget);
        const idTaskSelected = e.target.closest('.task').getAttribute('data-id');
        console.log(idTaskSelected);
        body = JSON.stringify({ id: idTaskSelected }) 
        Swal.fire({
            title: 'Delete?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch('tasks/delete',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
                
            })
              .then(response => {
                if (response.status == 200) {
                    Swal.fire({
                        title: 'Deleted!',
                        text: "Task Has Been Deleted Successfully",
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
            }
          })
    })
});