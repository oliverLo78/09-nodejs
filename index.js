// fs is Node standard library package for reading and writing files
// bringing the inquirer library into the file 
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utilities/generateMarkdown');

// Questions for user to answer their input  
const questions = ([
    {  // we can change the type field of the question can be Input, Number, Confirm, List, Checkbox, Password
      type: 'input', 
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is your projects name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project'
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license should your project have?',
      // list type rquires you to add an additional key to your question: choices array
      choices: ['MIT', 'APACHE 3.0', 'BSD 3', 'none'],
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What command should be run to install dependencies?',
      // lets you add default values to speed navigation and make suggestions to user
      default: 'npm i',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What command should be run to run tests?(npm run test)',
      default: 'npm i',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What does the user need to know about using the repo?' 
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'What does the user need to know about contributing to the repo?'
    },

  ]);

  // Function to write README file using the user input
  function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data, err => err ? console.log(err) : console.log('success'));
  }
  // Function to run the app .then(inquirerResponse) why is this giving me error?
  function init() {
    inquirer.prompt(questions).then((inquirerResponse) => {
      console.log('Creating README...');
      writeToFile('README.md', generateMarkdown({ ...inquirerResponse }));
    })
  };

init();
  
//   .then((answers) =>
//   // Name the file with the name answer
//     const filename = `${answers.name.toLowerCase().split(' ').join(' ')}.json`
//     console.log(answers);

//   fs.writeFile(filename, JSON.stringify(answers, null, '\t'), (err) =>
//     err ? console.log(err) : console.log('Success!')
//   );
// });

