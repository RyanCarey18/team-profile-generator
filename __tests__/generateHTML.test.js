const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const generateHTML = require("../src/generateHTML");

describe("generateItem function", () => {
  it("Retrieves an office number", () => {
    const Bill = new Manager("Bill", 32, "bill@email.com", 55);

    expect(generateHTML.generateItem(Bill)).toEqual("Office Number: 55");
  });
  it("Retrieves a github", () => {
    const Bill = new Engineer("Bill", 32, "bill@email.com", "billgithub");

    expect(generateHTML.generateItem(Bill)).toEqual(
      `Github: <a href="https://github.com/billgithub" target="blank">billgithub</a>`
    );
  });
  it("Retrieves am school", () => {
    const Bill = new Intern("Bill", 32, "bill@email.com", "UNH");

    expect(generateHTML.generateItem(Bill)).toEqual("School: UNH");
  });
});

describe("generateHTML", () => {
  it("Outputs correct HTML", () => {
    employees = [];
    employees.push(new Manager("Bill", 1, "bill@bill.com", 50));

    expect(generateHTML.generateHTML(employees)).toMatch("<!DOCTYPE html>");
    expect(generateHTML.generateHTML(employees)).toEqual(`<!DOCTYPE html>
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
      ${generateHTML.generateCard(employees)}
      </div>
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
  </body>
</html>`);
  });
});
