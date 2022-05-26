const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');
const Employee = require('./lib/classes');
const getQuestions = require('./lib/questions');
const generateHTML = require('./src/generateHTML');

let role = '';
let team = [];

// init questions
const initQuestions = [
    {
        type: 'input',
        name: 'teamName',
        message: `What is the name of your team?`
    },
]
// new employee questions
const newEmployee = [
    {
        type: 'list',
        name: 'role',
        message: 'Select the type of employee you would like to create next:',
        choices: ['Manager', 'Employee', 'Engineer', 'Intern', 'Make Webpage'],
    }
]
// function to start the program running
function init() {
    inquirer.prompt(initQuestions.concat(getQuestions('Manager')))
        .then((data) => {
            team.push(new Employee(data, 'Manager'));
            displayTeam(team);
        }).then(() => {
            addEmployee();
        })
}
// loop function to add an employee
function addEmployee() {
    inquirer.prompt(newEmployee).then((data) => {
        let newEmployeeRole = data.role;
        if (newEmployeeRole == 'Make Webpage') {
            writeToFile('./dist/index.html', generateHTML(team))
         }else {
             inquirer.prompt(getQuestions(newEmployeeRole))
             .then((data) => {
                 team.push(new Employee(data, newEmployeeRole, team[0].teamName));
                 displayTeam(team);
                 addEmployee();
             }) 
         }
    })
}
// show the current team size
function displayTeam() {
    console.log("==============================================")
    console.log(`Your team ${team[0].teamName()} currently has:`)
    console.log(`${roleCount('Manager')} Managers`);
    console.log(`${roleCount('Employee')} Employees`);
    console.log(`${roleCount('Engineer')} Engineers`);
    console.log(`${roleCount('Intern')} Inters`);
    console.log("==============================================")
}

function roleCount(id) {
    let count = team.filter((Employee) => Employee.role == id);
    return count.length;
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('Your new team file is ready!');
    });
}

init();