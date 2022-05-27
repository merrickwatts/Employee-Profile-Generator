const Employee = require('../lib/classes');
const Engineer = {
    teamName: 'Google',
    role: 'Engineer',
    name: 'Jeff',
    id: '08',
    email: 'Jeff@example.com',
    github: 'Jeff123', 
    school: undefined,
    officeNumber: undefined
  }
test('Create and list atributes of an employee', () => {
    expect(Employee(Engineer, Engineer)).toHaveProperty('role');
    expect(Employee(Engineer, Engineer)).toHaveProperty('teamName');
    expect(Employee(Engineer, Engineer)).toHaveProperty('name');
    expect(Employee(Engineer, Engineer)).toHaveProperty('id');
    expect(Employee(Engineer, Engineer)).toHaveProperty('email');
    expect(Employee(Engineer, Engineer)).toHaveProperty('teamName');
    expect(Employee(Engineer, Engineer)).toHaveProperty('github');
  });