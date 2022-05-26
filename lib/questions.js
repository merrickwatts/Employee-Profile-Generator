function getQuestions(role) {
    // employee questions
    const employeeQuestions = [
        {
            type: 'input',
            name: 'employeeName',
            message: `What is the name of the new ${role}?`
        },
        {
            type: 'input',
            name: 'employeeId',
            message: `What is the ID of the new ${role}?`
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: `What is the email of the new ${role}?`
        },
    ]
    // manager questions
    const managerQuestions = [
        {
            type: 'input',
            name: 'managerOffice',
            message: 'What is the number of your team managers office?'
        },
    ]


    // engineer questions
    const engineerQuestions = [
        {
            type: 'input',
            name: 'employeeGithub',
            message: 'What is the GitHub username of the new engineer?'
        },
    ]

    // intern questions
    const internQuestions = [
        {
            type: 'input',
            name: 'employeeSchool',
            message: 'What school does the intern attend?'
        },
    ]

    if (role == 'Manager') {
        return employeeQuestions.concat(managerQuestions);
    } else if (role == 'Engineer') {
        return employeeQuestions.concat(engineerQuestions);
    } else if (role == 'Intern') {
        return employeeQuestions.concat(internQuestions);
    } else if (role == 'Employee') {
        return employeeQuestions;
    }
}

module.exports = getQuestions;