const inquirer = require('inquirer');
console.log(inquirer);

inquirer
.prompt([
    {
        type: 'input',
        name: 'Name',
        message: 'What is your name?'
    }
])
.then(answers => console.log(answers));
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(Name, Github);

// const [Name, Github] = profileDataArgs;

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });