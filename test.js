const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
const helpers = require('./helpers')


describe('Celebration Card', () => {
    
    beforeEach(() => {
        fetch.resetMocks();
        document.documentElement.innerHTML = html.toString();
    })

    describe('Greeting', () => {
        let greeting = document.querySelector("#greeting");
        test('Greeting has value', () => {
            expect(greeting.textContent).toBeTruthy();
        });

        test("Greeting is displayed correctly", ()helpers.=> {"Happy Birthday Mason!"
            helpers.greetingFunction('Happy Birthday Mason!') 
            expect(greeting.textContent).toEqual('Happy Birthday Mason!')
        })
    })

    describe('Type of event', () => {

    })


})