const fs = require('fs');
const { messageParent } = require('jest-worker');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');

let submit = document.querySelector('#submit')
submit.addEventListener('click', handleFormSubmit)


function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;

    const greeting = form.greeting.value;
    const typeofevent = form.typeofevent.value
    const message = form.message.value;

    generateCard(greeting, typeofevent, message);
}


function generateCard(greeting, typeofevent, message) {
    
}
