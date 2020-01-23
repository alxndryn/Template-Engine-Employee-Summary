//Classes
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");


//Node Modules
const inquirer = require("inquirer");
const fs = require("fs");

teamArr = [];
const userInput = [
  {
    type: "input",
    name: "name",
    message: "Enter manager name:"
  },
  {
    type: "input",
    name: "email",
    message: "Enter manager e-mail:"
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
];

const teamInput = [
  {
    type: "input",
    name: "name",
    message: "Enter employee name:"
  },
  {
    type: "input",
    name: "email",
    message: "Enter employee email:"
  },
  {
    type: "list",
    name: "role",
    choices: ["Engineer", "Intern"]
  },
  {
    when: answer => {
      return answer.role == "Engineer"
    },
    type: "input",
    name: "github",
    message: "Enter Github username:"
  },
  {
    when: answer => {
      return answer.role == "Intern"
    },
    type: "input",
    name: "school",
    message: "Enter the name of your school:"
  },
  {
    type: "list",
    name: "addEmployee",
    message: "Add employees?",
    choices: ["Yes", "No"]
  }
]

//Adds additional team members
function addEmployee() {
  inquirer.prompt(teamInput).then(answer => {
    if (answer.role == "Engineer") {
      var newEmployee = new Engineer(answer.name, teamArr.length + 1, answer.email, answer.github);
    } else {
      var newEmployee = new Intern(answer.name, teamArr.length + 1, answer.email, answer.school);
    }
    teamArr.push(newEmployee);
    console.log(teamArr);
    if (answer.addEmployee === "Yes") {
      addEmployee();
    } else {
      buildPage();
    }
  })
}


//Builds HTML page (unfinished)
function buildPage() {
    let newFile = fs.readFileSync("./templates/main.html")
    fs.writeFileSync("./output/team.html", newFile, function (err) {
        if (err) throw err;
    })
    console.log("Created template. Generating cards...")
}


//Run application
function init() {
  inquirer.prompt(userInput).then(answer => {
    let teamManager = new Manager (answer.name, 1, answer.email, answer.officeNumber);
    teamArr.push(teamManager);
    console.log(teamArr);
    if (answer.addEmployee === "Yes") {
      addEmployee();
    } else {
     buildPage();
    }
  })
  }

init();

//manager questions
//employee questions
//function for manager to build page(currently console.log) or add employees
//function for employees to build page(currently console.log) or add more employees

//create html page writing function
//write html templates