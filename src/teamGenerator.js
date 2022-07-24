
// manager card
const managerCard = (manager) => {
    return `  <div class="row">
<div class="col s12 m6">
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <ul class="collection with-header">
      <li class="collection-header"><h4>${manager.name}</h4></li>
      <li class="collection-header"><h4>${manager.role}</h4></li>
      <li class="collection-item">id ${manager.id}</li>
      <li class="collection-item">email ${manager.email}</li>
      <li class="collection-item">office number ${manager.officeNumber}</li>
    </ul>
    </div>
  </div>
</div>
</div>`}


// engineer card
const engineerCard = (engineer) => {
    return `  <div class="row">
<div class="col s12 m6">
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <ul class="collection with-header">
      <li class="collection-header"><h4>$engineer.name}</h4></li>
      <li class="collection-header"><h4>${engineer.role}</h4></li>
      <li class="collection-item">id ${engineer.id}</li>
      <li class="collection-item">email ${engineer.email}</li>
      <li class="collection-item"><a href="https://github.com/${engineer.github}">my github</a></li>
    </ul>
    </div>
  </div>
</div>
</div>`
}

// intern card
const internCard = (intern) => {
    return `<div class="row">
<div class="col s12 m6">
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <ul class="collection with-header">
      <li class="collection-header"><h4>${intern.name}</h4></li>
      <li class="collection-header"><h4>${intern.role}</h4></li>
      <li class="collection-item">id ${intern.id}</li>
      <li class="collection-item">email ${intern.email}</li>
      <li class="collection-item">school ${intern.school}</li>
    </ul>
    </div>
  </div>
</div>
</div>`
}

const generateHTML = (data) => {
    employeesArray = []
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();
        if (role === manager){
            const managersCard = managerCard(employee)
            employeesArray.push(managersCard)
        }

        if (role === engineer){
            const engineerCard = engineerCard(employee)
            employeesArray.push(engineersCard)
        }

        if (role === intern){
            const internsCard = internCard(employee)
            employeesArray.push(internsCard)
        }

        const employeeCards = employeesArray.join('')
        const generateEmployeesPage = generatePage(employeeCards)
    }


const generatePage = (employeesCards) => {
   return  `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./assets/style.css">
        <title>our team</title>
    </head>
    <body>
        <nav>
            <div class="nav-wrapper">
              <a href="#" class="brand-logo center">Logo</a>
              <ul id="nav-mobile" class="left hide-on-med-and-down">
              </ul>
            </div>
          </nav>
    
          <body>
          <div class="container">
           ${employeesCards}
          </div>
        </body>
    
    
    
      <!-- Compiled and minified CSS -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    
      <!-- Compiled and minified JavaScript -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
              
    </body>
    </html>`
}

}