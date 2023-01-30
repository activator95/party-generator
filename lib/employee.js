// Employee class is parent of all Role classes
class Employee {
    constructor(name, id, email, imgSrc) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.imgSrc = imgSrc;
        this.jobTitle = 'Employee';
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getImgSrc() {
        return this.imgSrc;
    }

    getRole() {
        return this.jobTitle;
    }
}

module.exports = Employee;