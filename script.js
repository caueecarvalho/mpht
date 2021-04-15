window.onload = function () {
    let button = document.querySelector ('.submit')
    button.addEventListener ('click', readInfo)
}

function readInfo (){
    let name = document.querySelector ('.name')
    console.log (name)
}

