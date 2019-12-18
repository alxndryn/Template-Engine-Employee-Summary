var inquirer = require("inquirer");

class Employee {
    constructor(name, id, email, title) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.title = title;
    }

    getName() {
        inquirer.prompt([
            {
              type: "input",
              name: "name",
              message: "What is your name?"
            }
        ]).then(function(data) {
            data.name = JSON.stringify(data.name);
            this.name = data.name;
            console.log(this.name);
           

            console.log("Success!");
        });
    };

    getId() {

    };

    getEmail() {

    };

    getRole() {
        //Returns "Employee"
    };

    printStats() {
        console.log(this.name);
    };
};


const e = new Employee();

e.getName();

e.printStats();



module.exports = Employee;