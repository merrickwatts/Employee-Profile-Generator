const Employee = require('../lib/classes');
const employee = {
    teamName: 'Google',
    role: 'Employee',
    name: 'Tod',
    id: '07',
    email: 'Tod@example.com',
    github: undefined,
    school: undefined,
    officeNumber: undefined
  }
test('Create and list atributes of an employee', () => {
    expect(Employee(employee, employee)).toHaveProperty('role');
    expect(Employee(employee, employee)).toHaveProperty('teamName');
    expect(Employee(employee, employee)).toHaveProperty('name');
    expect(Employee(employee, employee)).toHaveProperty('id');
    expect(Employee(employee, employee)).toHaveProperty('email');
    expect(Employee(employee, employee)).toHaveProperty('teamName');
  });