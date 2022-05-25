const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');

// init questions (manager questions)
const initQuestions = [
    {
        type: 'input',
        name: 'teamName',
        message: 'What is the name of your team?'
    },
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the name of your teams manager?'
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is your team managers employee ID?'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is your team managers email address?'
    },
    {
        type: 'number',
        name: 'managerOffice',
        message: 'What is the number of your team managers office?'
    },
]

// employee questions
const employeeQuestions = [
    {
        type: 'input',
        name: 'employeeName',
        message: 'What is the name of the new employee?'
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'What is the ID of the new employee?'
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: 'What is the email of the new employee?'
    },
]

// engineer questions
const engineerQuestions = [
    {
        type: 'input',
        name: 'employeeGitHub',
        message: 'What is the GitHub username of the new employee?'
    },
]

// intern questions
const internQuestions = [
    {
        type: 'input',
        name: 'employeeSchool',
        message: 'What school does the employee attend?'
    },
]