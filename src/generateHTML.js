function generateHTML (team) {
    return `
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="./stylesheet.css">
        <title>My Team</title>
    </head>
    <body>
        <div class="header">
            <h1 class="title">${team[0].teamName()}</h1>
        </div>
        <div class="jobs-sections ">
            <div class="job-section">
                ${getManagerCards(team)}
            </div>
            <div class="job-section">
                ${getEngineerCards(team)}
                
            </div>
            <div class="job-section">
                ${getEmployeeCards(team)}
            </div>
            <div class="job-section">
                ${getInternCards(team)}
            </div>        
        </div>
    </body>
    </html>
    `
    function getManagerCards (team) {
        let managerCards = ``;
        const managers = team.filter((Employee) => Employee.role == 'Manager');
        for (let i = 0; i < managers.length; i++) {
            managerCards = managerCards + 
            `
            <div class="job-card">
                <div class="job-card-header manager">
                    <h2>${managers[i].name}</h2>
                    <h2><span class="material-icons inline-icon">coffee</span> Manager</h2>
                </div>
                <div class="job-card-body">
                    <p class="creds">ID: ${managers[i].id}</p>
                    <p class="creds">Email:</p>
                    <a href="mailto: ${managers[i].email}" class="creds">${managers[i].email.substring(0,14)}</a>
                    <p class="creds">Office Number:</p>
                    <p class="creds">${managers[i].officeNumber}</p> 
                </div>
            </div>
            `
        }
        return managerCards;
    }

    function getEngineerCards (team) {
        let engineerCards = ``;
        const engineers = team.filter((Employee) => Employee.role == 'Engineer');
        for (let i = 0; i < engineers.length; i++) {
            engineerCards = engineerCards + 
            `
            <div class="job-card">
                <div class="job-card-header engineer">
                    <h2>${engineers[i].name}</h2>
                    <h2><span class="material-icons inline-icon">hardware</span> Engeneer</h2>
                </div>
                <div class="job-card-body">
                    <p class="creds">ID: ${engineers[i].id}</p>
                    <p class="creds">Email:</p>
                    <a href="mailto: ${engineers[i].email}" class="creds">${engineers[i].email.substring(0,14)}</a>
                    <p class="creds">GitHub:</p> 
                    <a href="https://github.com/${engineers[i].github}" class="creds">${engineers[i].github}</a>
                </div>
            </div>
            `
        }
        return engineerCards;
    }

    function getInternCards (team) {
        let internCards = ``;
        const interns = team.filter((Employee) => Employee.role == 'Intern');
        for (let i = 0; i < interns.length; i++) {
            internCards = internCards + 
            `
            <div class="job-card">
                <div class="job-card-header intern">
                    <h2>${interns[i].name}</h2>
                    <h2><span class="material-icons inline-icon">edit</span> Intern</h2>
                </div>
                <div class="job-card-body">
                    <p class="creds">ID: ${interns[i].id}</p>
                    <p class="creds">Email:</p>
                    <a href="mailto: ${interns[i].email}" class="creds">${interns[i].email.substring(0,14)}</a>
                    <p class="creds">School:</p> 
                    <p class="creds">${interns[i].school}</p>
                </div>
            </div>
            `
        }
        return internCards;
    }

    function getEmployeeCards (team) {
        let employeeCards = ``;
        const employees = team.filter((Employee) => Employee.role == 'Employee');
        for (let i = 0; i < employees.length; i++) {
            employeeCards = employeeCards + 
            `
            <div class="job-card">
                <div class="job-card-header employee">
                    <h2>${employees[i].name}</h2>
                    <h2><span class="material-icons inline-icon">person</span> Employee</h2>
                </div>
                <div class="job-card-body">
                    <p class="creds">ID: ${employees[i].id}</p>
                    <p class="creds">Email:</p>
                    <a href="mailto: ${employees[i].email}" class="creds">${employees[i].email.substring(0,14)}</a>
                </div>
            </div>
            `
        }
        return employeeCards;
    }
}
module.exports = generateHTML;