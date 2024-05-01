// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the decription of the project?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the projects installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose a license',
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'None'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const { title, description, installation, usage, license, contribution, tests, github, email } = data;
    const content = `
# ${title}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
This application is covered under the ${license} license.

## Contributing
${contribution}

## Tests
${tests}

## Questions
For additional questions, contact me via GitHub: [${github}](https://github.com/${github})  
or email: ${email}
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
