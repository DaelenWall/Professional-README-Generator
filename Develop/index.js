const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your repository?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'enter the description for your repository.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter the installation instructions for your repository.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter the usage information for your repository.',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter the contribution guidelines for your repository.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter the test instructions for your repository.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to use?',
      choices: ['Apache', 'MIT', 'BSD', 'Unlicense'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your Github username.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your Email address.',
    },
  ]);
};

const generateREADME = ({ title, description, installation, usage, contributing, tests, license, github, email }) =>
`# Title
${title}

# Description
${description}

# Installation Instructions
${installation}

# Usage Information
${usage}

# Contribution Guidelines
${contributing}

# Test Instructions
${tests}

# License
License: ${license}

# Questions 
Github: ${github}
Email: ${email}`;

  const init = () => {
    promptUser()
      .then((answers) => fs.writeFileSync('README.md', generateREADME(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };
  
  init();