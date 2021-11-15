function generateHTML() {
  `<!DOCTYPE html>
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
      ${generateCard()}
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
function generateCard() {
  employees.forEach((employee) => {
    return `<div class="card col-3 my-card">
<div class="card-body">
  <h3 class="card-title">${this.name}</h3>
  <h2 class="card-text">${this.getRole()}</h2>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Employee Number: ${this.id}</li>
  <li class="list-group-item">Email: ${this.email}</li>
  <li class="list-group-item">${generateItem(employee)}</li>
</ul>
</div>`;
  });
}

function generateItem(employee) {
  if (employee.officeNumber) {
    return `Office Number: ${employee.officeNumber}`;
  } else if (employee.github) {
    return `Github: ${employee.github}`;
  } else if (employee.school) {
    return `School ${employee.school}`;
  } else {
    return;
  }
}

module.exports = {
  generateHTML,
  generateCard,
};
