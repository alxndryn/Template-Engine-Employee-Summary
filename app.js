//Classes
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");


//Node Modules
const inquirer = require("inquirer");
const fs = require("fs");


const userInput = [
  {
    type: "input",
    name: "name",
    message: "Enter manager name:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter manager e-mail:",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter manager office number:"
  },
  {
    type: "list",
    name: "addEmployee",
    message: "Add employees?",
    choices: ["Yes", "No"]
  }
]

function init() {
  inquirer.prompt(userInput)
  }

init();