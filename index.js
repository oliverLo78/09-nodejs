const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
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
    {
      type: 'input',
      name: 'project',
      message: 'What is your projects name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project'
    },
    {
      type: 'input',
      name: 'license',
      message: 'What kind of license should your project have?'
    },
    {
      type: 'input',
      name: 'dependencies',
      message: 'What command should be run to install dependencies?'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What command should be run to run tests?(npm test)'
    },
    {
      type: 'input',
      name: 'repo',
      message: 'What does the user need to know about using the repo?'
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'What does the user need to know about contributing to the repo?'
    },

  ])
  .then((answers) =>
  // Name the file with the name answer
    const filename = `${answers.name.toLowerCase().split(' ').join(' ')}.json`;
  
  fs.writeFile(filename, JSON.stringify(answers, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Success!')
  );
});
