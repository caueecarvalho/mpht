window.onload = function () {
    let button = document.querySelector ('.submit')
    button.addEventListener ('click', readInfo)
}

function readInfo (){
    let name = document.querySelector ('.name')
    let mail = document.querySelector ('.email')
    let phone = document.querySelector ('.phone')
    let message = document.querySelector ('.message')

    fetch ('URL', {
     method: 'post',
     body:{
         name: name.value,
         mail: mail.value,
         phone: phone.value,
         message: message.value
     }
     })


}




