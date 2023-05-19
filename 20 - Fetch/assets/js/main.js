document.querySelector('button').addEventListener('click', function(){
    const fetched = fetch('https://6466ff9cba7110b663ad2ba9.mockapi.io/students',{
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fullName: document.querySelector('#full_name').value,
            avatar: document.querySelector('#img_url').value,
            course: document.querySelector('#course').value
        })
    })
    fetched.then(res=>{
        (res.ok == true)
        {
            document.querySelector('#full_name').value = '';
            document.querySelector('#img_url').value = '';
            document.querySelector('#course').value = '';
            successAlert('Student created !')
        }
    }).catch(err=>console.log(err))
})



function successAlert(message){
    Command: toastr["success"](message)

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-left",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "20000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
}