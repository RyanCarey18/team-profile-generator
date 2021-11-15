const Employee = require("./lib/employee");
const inquirer = require("inquirer");

const managerQs = [
  {
    type: "input",
    message: "What is the Team Managers name?",
    name: "manager",
  },
  {
    type: "input",
    message: "What is the Team Managers ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the Team Managers Email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the Team Managers office number?",
    name: "officeNumber",
  },
];

function init() {
  inquirer.prompt(managerQs).then((response) => {
    console.log(response);
  });
}

init();
