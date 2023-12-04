// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is this app used for?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions for your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide test step-by-step installation instructions for your project?',
    },
    {
        type: 'input',
        name: 'issues',
        message: 'Please provide any issues that you have come across with your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines for your project.',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md generated successfully!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        // Generate README content based on user answers
        const readmeContent = generateReadme(answers);

        // Write README file
        writeToFile('README.md', readmeContent);
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README.md generated successfully!')
    );
}

// TODO: Create a function to generate README content
function generateReadme(answers) {
    return `
# ${answers.title}

## Description
${answers.usage}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
[![License](https://img.shields.io/badge/license-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})

This project is licensed under the ${answers.license} license.

## Contributing
${answers.contribution}

## Tests
${answers.test}

## Questions
If you have any questions, feel free to reach out to me via [GitHub](https://github.com/${answers.username}) or email at ${answers.email}.
`;
}

// Function call to initialize app
init();
