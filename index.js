const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");
const inquirer = require("inquirer");
const fs = require("fs");
const employees = [];
let q4name = "officeNumber";
let employeeType = "manager";
let q4message = "office number";

//creates the question list with the current employee type
function questionFunc() {
  const questions = [
    {
      type: "input",
      message: `What is the ${employeeType}'s name?`,
      name: "name",
    },
    {
      type: "input",
      message: `What is the ${employeeType}'s ID?`,
      name: "id",
    },
    {
      type: "input",
      message: `What is the ${employeeType}'s Email address?`,
      name: "email",
    },
    {
      type: "input",
      message: `What is the ${employeeType}'s ${q4message}?`,
      name: q4name,
    },
    {
      type: "list",
      message: "Would you like to add another team member?",
      name: "teamMember",
      choices: ["Engineer", "Intern", "No"],
    },
  ];
  //returns the new set of questions
  return questions;
}

//starts inquirer with the current set of questions
function init(questions) {
  inquirer.prompt(questions).then((response) => {
    //once inquirer has been answered we will create a new employee for the information.
    createEmployee(response);
    //now we will check what the next selected option is to know what to do next.
    //if its an engineer we update the question variables and rerun inquirer
    if (response.teamMember === "Engineer") {
      q4name = "github";
      employeeType = "engineer";
      q4message = "github";

      return init(questionFunc());
      //if its an intern we update the questions variables and rerun inquirer
    } else if (response.teamMember === "Intern") {
      q4name = "school";
      employeeType = "intern";
      q4message = "school";

      return init(questionFunc());
      //if it is no then we will generate the HTML to make the web page with and start the write to file function
    } else {
      html = generateHTML.generateHTML(employees);
      return writeToFile("./dist/index.html", html);
    }
  });
}
//take the created html and the file and file path and create it.
function writeToFile(fileName, html) {
  fs.writeFile(fileName, html, (err) =>
    err ? console.error(err) : console.log("TeamPage created!")
  );
}

//Take the answers from inqirer and create a new employee
function createEmployee(response) {
  //if the response has an officenumber than create a manager
  if (response.officeNumber) {
    employees.push(
      new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      )
    );
    //if the respoinse has a github create an engineer
  } else if (response.github) {
    employees.push(
      new Engineer(response.name, response.id, response.email, response.github)
    );
    //if the response has a school create an intern.
  } else if (response.school) {
    employees.push(
      new Intern(response.name, response.id, response.email, response.school)
    );
    // If it has none of the above do nothing and exit.
  } else {
    return;
  }
}

//start inquirer on load
init(questionFunc());

//export the functions for testing.
module.exports = { writeToFile, init, createEmployee, questionFunc };
