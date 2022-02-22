// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");
const employee = require("../lib/employee");
const engineer = require("../lib/engineer");
const intern = require("../lib/intern");
const manager = require("../lib/manager");

/*
    array of questions objects for Inquirer
        manager prompts: 
            name, 
            employee ID, 
            email address, 
            office number
        presented with a Menu with options to:
            add engineer
            add intern
            finish building team
        engineer prompts:
            name, 
            employee ID, 
            email address, 
            GitHub username
            returned to Menu
        intern prompts:
            name, 
            employee ID, 
            email address, 
            school
            returned to Menu
        finish building team
            exits application
*/
const managerQuestions = [
  {
    name: "name",
    type: "input",
    message: "Enter your team Manager's name.",
  },

  {
    name: "id",
    type: "input",
    message: "Enter your team Manager's employee ID number.",
  },

  {
    name: "email",
    type: "input",
    message: "Enter your team Manager's email.",
  },

  {
    name: "officeNumber",
    type: "input",
    message: "Enter your team Manager's office number.",
  },

  {
    name: "whatNext",
    type: "list",
    message: "How would you like to proceed?",
    choices: ["Add An Enginner to My Team", "Add an Intern to My Team", "Finish Building My Team"],
  },
];

const engineerQuestions = [
  {
    name: "name",
    type: "input",
    message: "Enter your Engineer's name.",
  },

  {
    name: "id",
    type: "input",
    message: "Enter your Engineer's employee ID number.",
  },

  {
    name: "email",
    type: "input",
    message: "Enter your Engineer's email.",
  },

  {
    name: "github",
    type: "input",
    message: "Enter your Engineer's github account name.",
  },

  {
    name: "whatNext",
    type: "list",
    message: "How would you like to proceed?",
    choices: ["Add An Enginner to My Team", "Add an Intern to My Team", "Finish Building My Team"],
  },
];

const internQuestions = [
  {
    name: "name",
    type: "input",
    message: "Enter your Intern's name.",
  },

  {
    name: "id",
    type: "input",
    message: "Enter your Intern's employee ID number.",
  },

  {
    name: "email",
    type: "input",
    message: "Enter your Intern's email.",
  },

  {
    name: "github",
    type: "input",
    message: "Enter your Intern's github account name.",
  },

  {
    name: "whatNext",
    type: "list",
    message: "How would you like to proceed?",
    choices: ["Add An Enginner to My Team", "Add an Intern to My Team", "Finish Building My Team"],
  },
];

/*
    runInquirer
        * inquirer prompts user with questions from the questions array
        * user's answers are saved as "answers"
        * always manager questions
        * menu to cycle through until user chooses to finish building team
        * send the answers to
            const managerCard = manager.methodName(answers)
            const engineerCard = enginner.methodName(answers)
            const internCard = intern.methodName(answers)
            const HTMLText = generateHTMLText.methodName(answers, managerCard, engineerCard, internCard)

*/
// function runInqurer() {
//   inquirer.prompt(questions).then((answers) => {
//     const employeeManager = new manager(answers);
//     const managerName = employeeManager.name;
//     const managerId = employeeManager.id;
//     const managerEmail = employeeManager.email;
//     const managerOfficeNumber = employeeManager.officeNumber;
//     const managerRole = employeeManager.getRole();

//     const managerCard = generateHTML.generateManager({ managerName, managerId, managerEmail, managerOfficeNumber, managerRole });
//     const HTMLText = generateHTML.generateHTMLText(managerCard);
//     writeToFile(HTMLText);
//   });
// }

// TODO: Push each employee object into an array to work through when all employees have been added

function runInquirerForManager() {
  inquirer.prompt(managerQuestions).then(function (managerAnswers) {
    const employeeManager = new manager(managerAnswers);
    const managerName = employeeManager.name;
    const managerId = employeeManager.id;
    const managerEmail = employeeManager.email;
    const managerOfficeNumber = employeeManager.officeNumber;
    const managerRole = employeeManager.getRole();
    const managerCard = generateHTML.generateManager({ managerName, managerId, managerEmail, managerOfficeNumber, managerRole });

    // check what to do next
    let whatNext = managerAnswers.whatNext;

    if (whatNext === "Finish Building My Team") {
      console.log("they chose Finish Building My Team");
      const HTMLText = generateHTML.generateHTMLText(managerCard);
      writeToFile(HTMLText);
    } else {
      if (whatNext === "Add An Enginner to My Team") {
        console.log("they chose an engineer");
        runInquirerForEngineer();
      }
    }
  });
}

function runInquirerForEngineer() {
  inquirer.prompt(engineerQuestions).then(function (engineerAnswers) {
    const employeeEngineer = new engineer(engineerAnswers);
    const engineerName = employeeEngineer.name;
    const engineerId = employeeEngineer.id;
    const engineerEmail = employeeEngineer.email;
    const engineerGithub = employeeEngineer.github;
    const engineerRole = employeeEngineer.getRole();
    const engineerCard = generateHTML.generateEngineer({ engineerName, engineerId, engineerEmail, engineerGithub, engineerRole });

    let whatNext = engineerAnswers.whatNext;

    if (whatNext === "Finish Building My Team") {
      console.log("they chose Finish Building My Team");
      const HTMLText = generateHTML.generateHTMLText(engineerCard);
      writeToFile(HTMLText);
    } else {
      if (whatNext === "Add An Enginner to My Team") {
        console.log("they chose an engineer");
        runInquirerForEngineer();
      }
    }
  });
}

/*
 Write HTML file
  writes the index.html file using "HTMLText" from generateHTMLText.js
    * titles file "index.html"
    * writes file using "HTMLText" from generateHTMLText.js
    * if there is an error, console error
    * if the file is written successfully, console log sucess.
*/
function writeToFile(HTMLText) {
  fs.writeFile("../dist/index.html", HTMLText, (err) => (err ? console.error(err) : console.log("Success! The HTML webpage has been generated.")));
}

/*
 init()
  initializatize the application
    * calls runInquirer function
*/
function init() {
  runInquirerForManager();
}

// Initialize the application by calling init function
init();
