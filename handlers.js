const fs = require('fs');
const { messageParent } = require('jest-worker');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');

let submit = document.querySelector('#submit')  //set id in index.html

submit.addEventListener('click', generateCard)

function generateCard() {

}


function getGreeting() {

    return greeting;
}

function getOccasion() {

    return occasion;
}

function getMessage() {
    
    return message;
}