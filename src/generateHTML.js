const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");

//generates an HTML for the team page
function generateHTML(employees) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" type="text/css" href="./style.css" />
    <title>My Team Page</title>
  </head>

  <body>
    <header>
      <h1>My Team</h1>
    </header>
    <div class="container">
      <div class="row my-row">
      ${generateCard(employees)}
      </div>
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
  </body>
</html>`;
}

//Creates an HTML card for each employee
function generateCard(employees) {
  //the string in which each set of html is added to
  let card = "";
  //Creates the HTMl for each employee in the employees array and adds it to the card variable
  employees.forEach((employee) => {
    newCard = `<div class="card col-3 ${employee.getRole()}-card">
<div class="card-body ${employee.getRole()}-top">
  <h3 class="card-title">${employee.getName()}</h3>
  <h5 class="card-text">${employee.getRole()}</h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Employee Number: ${employee.getId()}</li>
  <li class="list-group-item">Email: <a href = "mailto: ${employee.getEmail()}">${
      employee.email
    }</a></li>
  <li class="list-group-item">${generateItem(employee)}</li>
</ul>
</div>`;
    card = card.concat(newCard);
    return;
  });
  return card;
}

//checks what type of employee to change html accordingly
function generateItem(employee) {
  //checks to see if theyre a manager
  if (employee.officeNumber) {
    return `Office Number: ${employee.officeNumber}`;
    //checks to see if theyre an engineer
  } else if (employee.github) {
    return `Github: <a href="https://github.com/${employee.getGithub()}" target="blank">${employee.getGithub()}</a>`;
    //checks to see if theyre a student
  } else if (employee.school) {
    return `School: ${employee.getSchool()}`;
    //if they do not have an employee type then it console logs telling you.
  } else {
    return console.log("Missing employee type");
  }
}

//exports these functions
module.exports = {
  generateHTML,
  generateCard,
  generateItem,
};
