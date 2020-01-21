const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, title, github) {

        super(name, id, title);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer"
    }
};

module.exports = Engineer;

//getGithub()
//getRole() return "Engineer"