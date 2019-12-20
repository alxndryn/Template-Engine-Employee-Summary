var inquirer = require("inquirer");

class Employee {
    constructor(name, id, email, title) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.title = title;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }

    printStats() {
        console.log(b.name);
    }
};


const e = new Employee("Alexander", 1, "ah@gmail.com");

console.log(e.getEmail());








module.exports = Employee;