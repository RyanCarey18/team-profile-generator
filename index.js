const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const employees = [];
// let q4name = "officeNumber";
// let employeeType = "manager";
// let q4message = "office number";

// const questions = [
//   {
//     type: "input",
//     message: `What is the ${employeeType}'s name?`,
//     name: "name",
//   },
//   {
//     type: "input",
//     message: `What is the ${employeeType}'s ID?`,
//     name: "id",
//   },
//   {
//     type: "input",
//     message: `What is the ${employeeType}'s Email address?`,
//     name: "email",
//   },
//   {
//     type: "input",
//     message: `What is the ${employeeType}'s ${q4message}?`,
//     name: q4name,
//   },
//   {
//     type: "list",
//     message: "Would you like to add another team member?",
//     name: "teamMember",
//     choices: ["Engineer", "Intern", "No"],
//   },
// ];
const managerQs = [
  {
    type: "input",
    message: `What is the manager's name?`,
    name: "name",
  },
  {
    type: "input",
    message: `What is the manager's ID?`,
    name: "id",
  },
  {
    type: "input",
    message: `What is the manager's Email address?`,
    name: "email",
  },
  {
    type: "input",
    message: `What is the manager's office number?`,
    name: "officeNumber",
  },
  {
    type: "list",
    message: "Would you like to add another team member?",
    name: "teamMember",
    choices: ["Engineer", "Intern", "No"],
  },
];
const engineerQs = [
  {
    type: "input",
    message: `What is the engineer's name?`,
    name: "name",
  },
  {
    type: "input",
    message: `What is the engineer's ID?`,
    name: "id",
  },
  {
    type: "input",
    message: `What is the engineer's Email address?`,
    name: "email",
  },
  {
    type: "input",
    message: `What is the engineer's github?`,
    name: "github",
  },
  {
    type: "list",
    message: "Would you like to add another team member?",
    name: "teamMember",
    choices: ["Engineer", "Intern", "No"],
  },
];

const internQs = [
  {
    type: "input",
    message: `What is the intern's name?`,
    name: "name",
  },
  {
    type: "input",
    message: `What is the intern's ID?`,
    name: "id",
  },
  {
    type: "input",
    message: `What is the intern's Email address?`,
    name: "email",
  },
  {
    type: "input",
    message: `What is the intern's school?`,
    name: "school",
  },
  {
    type: "list",
    message: "Would you like to add another team member?",
    name: "teamMember",
    choices: ["Engineer", "Intern", "No"],
  },
];

function init(questions) {
  inquirer.prompt(questions).then((response) => {
    createEmployee(response);
    if (response.teamMember === "Engineer") {
      return init(engineerQs);
    } else if (response.teamMember === "Intern") {
      return init(internQs);
    } else return;
  });
}

function createEmployee(response) {
  if (response.officeNumber) {
    employees.push(
      new Manager(
        response.name,
        response.id,
        response.email,
        response.officenumber
      )
    );
  } else if (response.github) {
    employees.push(
      new Engineer(response.name, response.id, response.email, response.github)
    );
  } else if (response.school) {
    employees.push(
      new Intern(response.name, response.id, response.email, response.school)
    );
  }
}
// function init(questions) {
//   inquirer.prompt(questions).then((response) => {
//     console.log(response);
//     if (response.teamMember === "Engineer") {
//       q4name = "github";
//       q4message = "github";
//       employeeType = "engineer";
//       init();
//       return;
//     } else if (response.teamMember === "Intern") {
//       q4name = "school";
//       q4message = "school";
//       employeeType = "intern";
//       return init();
//     } else return;
//   });
//}

init(managerQs);
