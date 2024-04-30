// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const { title, description, installation, usage, license, contribution, tests, github, email } = data;
    const content = `
# ${title}
    `;

    fs.writeFile(fileName, content, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README created')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        writeToFile('README.md', answers);
    });


}

// Function call to initialize app
init();
