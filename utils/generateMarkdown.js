function generateMarkdown(data) {
    let badge = '';

    if (data.license === 'MIT') {
        badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } 
    else if (data.license === 'ISC') {
        badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    }
    else {
        badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    }

    let installationMD = '';
    let contributingMD = '';
    let testsMD = '';

    let tableofContents = `## Table of Contents`;

    if (data.installation) {
        tableofContents += `
* [Installation](#installation)`;

        installationMD = `
## Installation
To install dependencies run the following command:
\`\`\`
${data.installation}
\`\`\``;
    }

    tableofContents += `
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)`;

    if (data.contributing) {
        tableofContents += `
            * [Contributing](#contributing)`;

        contributingMD = `
## Contributing
${data.contributing}`;
    }

    if (data.tests) {
        tableofContents += `
* [Tests](#tests)`;

        testsMD = `
## Tests
To run tests, run the following command:
\`\`\`
${data.tests}
\`\`\`
`;
    }

    tableofContents += `
* [Questions](#questions)`;

    return `# ${data.title}
    
${badge}

## Description
${data.description}

${tableofContents}
${installationMD}
## Usage
${data.usage}
## Credits
Created by ${data.credit}.
## License
${data.title} is licensed under the ${data.license} license.
${contributingMD}
${testsMD}
## Questions
Reach out to me with any questions by connecting with me on [GitHub](https://github.com/${data.github}) or sending an email to ${data.email}.`;
}

module.exports = generateMarkdown;