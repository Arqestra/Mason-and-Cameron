const fs = require('fs');
const { messageParent } = require('jest-worker');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');

let submit = document.querySelector('#submit')  //set id in index.html

submit.addEventListener('click', generateCard)


function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    generateCard(form);
}


function getGreeting(form) {
    const greeting = form.greeting.value;
    return greeting;
}

function getOccasion() {
    
    return occasion;
}

function getMessage() {
    const message = form.message.value;
    return message;
}


function generateCard(form) {
    
}
