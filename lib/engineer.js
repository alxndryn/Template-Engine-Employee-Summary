const Employee = require("./employee");

class Engineer extends Employee {
    constructor(github) {

        super(name, id, title);
        this.github = github;
    }
}

//getGithub()
//getRole() return "Engineer"