const Developer = require('../lib/developer');

test('Developer has been added as the value for the property of role', () => {
    const returnValue = 'Developer';
    const employeeInstance = new Developer(
        'Jim Smith',
        9018,
        'jimsemail@gmail.com',
        'assets/app_img/Developer.jpg',
        'Jim Smith'
    );
    expect(employeeInstance.jobTitle).toBe(returnValue);
});

test('A GitHub username can be added to the Developer object', () => {
    const testGithub = 'Jim Smith';
    const employeeInstance = new Developer(
        'Jim Smith',
        9018,
        'jimsemail@gmail.com',
        'assets/app_img/Developer.jpg',
        testGithub
    );
    expect(employeeInstance.gitHubUsername).toBe(testGithub);
});

test('GitHub username is retrieved through the getGitHubUsername() method', () => {
    const testGithub = 'Jim Smith';
    const employeeInstance = new Developer(
        'Jim Smith',
        9018,
        'jimsemail@gmail.com',
        'assets/app_img/developer.jpg',
        testGithub
    );
    expect(employeeInstance.getGitHubUsername()).toBe(testGithub);
});