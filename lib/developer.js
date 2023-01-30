// Import the Employee parent class
const Employee = require('./Employee');

class Developer extends Employee {
    constructor(name, id, email, imgSrc, gitHubUsername) {
        super(name, id, email, imgSrc);
        this.gitHubUsername = gitHubUsername;
        this.jobTitle = 'Developer';
    }

    getGitHubUsername() {
        return this.gitHubUsername;
    }
}
module.exports = Developer;