const generateTeam = (team) =>{
  const generateManager = manager => {
    return `
            <div class= "card bg-light shadow-lg">  
              <div class= "card-body">
                <h2 class="card-title bg-primary rounded text-center text-light">${manager.getName()}</h2>
                <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
              </div>
            </div>    
    `;
  };

  const generateEngineer = engineer => {
    return `
            <div class= "card bg-light shadow-lg">  
              <div class= "card-body">
                <h2 class="card-title bg-primary rounded text-center text-light">${engineer.getName()}</h2>
                <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}"> ${engineer.getEmail()} </a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                </ul>
              </div>
            </div>  
  `;
  };

  const generateIntern = intern => {
    return `
            <div class= "card bg-light shadow-lg">
              <div class= "card-body">
                <h2 class="card-title bg-primary rounded text-center text-light">${intern.getName()}</h2>
                <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
                <ul class="card-text list-group">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
              </div>
            </div>  
    `;
  };

  const htmlArr= []
  
  htmlArr.push(
    team
      .filter((employee) => employee.getRole() === 'Manager')
      .map((manager) => generateManager(manager))
      .join("")
  );
  htmlArr.push(
    team
      .filter((employee) => employee.getRole() === 'Engineer')
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  htmlArr.push(
    team
      .filter((employee) => employee.getRole() === 'Intern')
      .map((intern) => generateIntern(intern))
      .join("")
  );

  return htmlArr.join("");
};


module.exports = team => {
  
    return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>

  <body class="bg-secondary">
    <div class="container-fluid ">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-success bg-success bg-gradient">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-between">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
  </body>
  </html>
    `;
};
