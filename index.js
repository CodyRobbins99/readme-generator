const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        name: 'title',
        message: 'What is the title of your project?',
        type: 'input',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('A title is required!');
                return false;
            }
        }
    },
    {
        name: 'credit',
        message: 'Enter the names of the project contributors, including your own.',
        type: 'input',
        validate: creditInput => {
            if (creditInput) {
                return true;
            } else {
                console.log('Credits are required!');
                return false;
            }
        }
    },
    {
        name: 'github',
        message: 'What is your GitHub username?',
        type: 'input',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Your github username is required!')
            }
        }
    },
    {
        name: 'email',
        message: 'What is your email address?',
        type: 'input',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Your email address is required!')
            }
        }
    },
    {
        name: 'description',
        message: 'Please describe your project',
        type: 'input',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('A description of your project is required!');
                return false;
            }
        }
    },
    {
        name: 'installation',
        message: 'Does your project require any steps to install? If so please list them.',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'How is your project used? Please provide instructions / examples. ',
        type: 'input',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('A description of your projects usage is required!')
            }
        }
    },
    {
        name: 'license',
        message: 'Select a license for your project.',
        type: 'list',
        choices: ['MIT', 'ISC', 'GNU GPLv3'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('A license is required!');
                return false;
            }
        }
    },
    {
        name: 'contributing',
        message: 'How can others contribute to this project?',
        type: 'input'
    },
    {
        name: 'tests',
        message: 'Does your project have any tests?',
        type: 'input'
    }
];

function writeToFile (fileName, data) {
    fs.promises.writeFile(`./output/${fileName}.md`, data);
}
(async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        const fileName = answers.title;
        const data = generateMarkdown(answers);
        writeToFile(fileName, data);
        console.log('Readme successfully generated in the output folder!')
    } catch (e) {
        console.log(e);
    }
})();