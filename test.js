const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');

describe('Celebration Card', () => {

    
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    describe('Greeting', () => {
        let greeting = document.querySelector("#greeting");
        test('Greeting has value', () => {
            expect(greeting.textContent).toBeTruthy();
        });

        test("Greeting is displayed correctly", () => {

        })
    })

    describe('Type of event selected', () => {

    })


})