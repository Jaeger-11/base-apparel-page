const form = document.getElementById('form');
const input = document.getElementById('input');
const message = document.querySelector('.message');
const button = document.getElementById('btn');
const error = document.getElementById('error');
pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
button.addEventListener('click', setMessage)

function setMessage(){
    input.className = 'empty'
    if(input.value === ''){
        input.className = 'warning';
        error.className = 'errorIcon';
        message.innerHTML = 'Whoops!, cannot be empty';
    } else if(input.value.match(pattern)) {
        error.className = 'removeError'
        input.classList.remove('warning')
    } else {
        input.className = 'warning'
        error.className = 'errorIcon'
        message.innerHTML = 'Please provide a valid email address'
    } 
}

console.log('hellooo')