// Import Employee class from Employee file
const Employee = require('../lib/employee');

// TEST OBJECT CREATION!

// Test object instantiation
test('A new employee object can be created', () => {
    const employeeObject = new Employee();
    expect(typeof employeeObject).toBe('object');
});

// Test name added to object of what ever name is inserted into the code through terminal
test('A name can be added as a property to an Employee Object', () => {
    const name = 'Jim Smith';
    const employeeObject = new Employee(name);
    expect(employeeObject.name).toBe('Jim Smith');
});

// Test id added to object
test('An ID can be added as a property to an Employee Object', () => {
    const id = 9018;
    const employeeObject = new Employee('Jim Smith', id);
    expect(employeeObject.id).toBe(9018);
});

// Test email added to object
test('An email can be added as a property to an Employee Object', () => {
    const email = 'jimsemail@gmail.com';
    const employeeObject = new Employee('Jim Smith', 9018, email);
    expect(employeeObject.email).toBe('jimsemail@gmail.com');
});

// Test that the correct role has been added
test('Employee has been added as the value for the property of role', () => {
    const returnValue = 'Employee';
    const employeeInstance = new Employee('Jim Smith', 9018, 'jimsemail@gmail.com');
    expect(employeeInstance.getRole()).toBe(returnValue);
});

// TEST METHODS!

// Test getName() method
test('name is retrieved through getName() method', () => {
    const testName = 'Jim Smith';
    const employeeObject = new Employee(testName);
    expect(employeeObject.getName()).toBe(testName);
});

// Test getId() method
test('id is retrieved through getId() method', () => {
    const testID = 9018;
    const employeeInstance = new Employee('Jim Smith', testID);
    expect(employeeInstance.getId()).toBe(testID);
});

// Test getEmail() method
test('email is retrieved through getEmail() method', () => {
    const testEmail = 'jimsemail@gmail.com';
    const employeeInstance = new Employee('Jim Smith', 9018, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
});
