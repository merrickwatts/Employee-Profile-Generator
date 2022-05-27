const Employee = require('../lib/classes');
const Manager = {
    teamName: 'Google',
    role: 'Intern',
    name: 'Steve',
    id: '130',
    email: 'Steve@example.com',
    github: undefined, 
    school: undefined,
    officeNumber: 'A13'
  }
test('Create and list atributes of an employee', () => {
    expect(Employee(Manager, Manager)).toHaveProperty('role');
    expect(Employee(Manager, Manager)).toHaveProperty('teamName');
    expect(Employee(Manager, Manager)).toHaveProperty('name');
    expect(Employee(Manager, Manager)).toHaveProperty('id');
    expect(Employee(Manager, Manager)).toHaveProperty('email');
    expect(Employee(Manager, Manager)).toHaveProperty('teamName');
    expect(Employee(Manager, Manager)).toHaveProperty('school');
  });