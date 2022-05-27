const Employee = require('../lib/classes');
const Intern = {
    teamName: 'Google',
    role: 'Intern',
    name: 'Bill',
    id: '10',
    email: 'Bill@example.com',
    github: undefined, 
    school: 'BYU',
    officeNumber: undefined
  }
test('Create and list atributes of an employee', () => {
    expect(Employee(Intern, Intern)).toHaveProperty('role');
    expect(Employee(Intern, Intern)).toHaveProperty('teamName');
    expect(Employee(Intern, Intern)).toHaveProperty('name');
    expect(Employee(Intern, Intern)).toHaveProperty('id');
    expect(Employee(Intern, Intern)).toHaveProperty('email');
    expect(Employee(Intern, Intern)).toHaveProperty('teamName');
    expect(Employee(Intern, Intern)).toHaveProperty('school');
  });