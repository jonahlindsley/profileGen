

// manager card
const managerCard = (manager) => {
    return `  <div class="row">
    <div class="col s8 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${manager.name}</span>
          <p>id: ${manager.id}</p>
          <p>office number: ${manager.officeNumber}</p>
        </div>
        <div class="card-action">
        <p>email:<a href="mailto:${manager.email}">${manager.email}</a></p>
        </div>
      </div>
    </div>
  </div>`}

                

// engineer card
const engineerCard = (engineer) => {
    return `  
      <div class="col s6 m4">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">${engineer.name}</span>
            <p>${engineer.role}</p>
            <p>id: ${engineer.id}</p>
          </div>
          <div class="card-action">
          <p>email:<a href="mailto:${engineer.email}">${engineer.email}</a></p>
          <a href="https://github.com/${engineer.github}">my github</a>
          </div>
        </div>
      </div>`
}

        
// intern card
const internCard = (intern) => {
    return ` <div class="col s6 m4">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${intern.name}</span>
          <p>${intern.role}</p>
          <p>id: ${intern.id}</p>
          <p>school: ${intern.school}</p>
        </div>
        <div class="card-action">
        <p>email:<a href="mailto:${intern.email}">${intern.email}</a></p>
        </div>
      </div>
    </div>`
}

const generateHTML = (answers) => {
  let managerArray = []
  let employeesArray = []
    for (let i = 0; i < answers.length; i++) {
        const employee = answers[i];
        const role = employee.getRole();
        if (role === 'Manager'){
            const managersCard = managerCard(employee)
            managerArray.push(managersCard)
        }

        if (role === 'Engineer'){
            const engineersCard = engineerCard(employee)
            employeesArray.push(engineersCard)
        }

        if (role === 'Intern'){
            const internsCard = internCard(employee)
            employeesArray.push(internsCard)
        }

    }
  
 
    const employeeCards = employeesArray.join('')
    
    const generatePage = (employeesCards) => {
      let newPage = `<!DOCTYPE html>
       <html lang="en">
       <head>
           <meta charset="UTF-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <!-- Compiled and minified CSS -->
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
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
             <div class="container">
             ${managerArray}
             <div class="row">
              ${employeesCards}
              </div>
             </div>
         <!-- Compiled and minified JavaScript -->
         <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
       </body>
       </html>`
       return newPage
    }

    const generateEmployeesPage = generatePage(employeeCards)

return generateEmployeesPage
  }
    
function init(answers) {

return generateHTML(answers)

}



module.exports = init;