// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML.js");
const employee = require("./lib/employee");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");

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
const questions = [
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
function runInqurer() {
  inquirer.prompt(questions).then((answers) => {
    const employeeManager = new manager(answers);

    const managerName = employeeManager.name;
    const managerId = employeeManager.id;
    const managerEmail = employeeManager.email;
    const managerOfficeNumber = employeeManager.officeNumber;
    const managerRole = employeeManager.getRole();

    console.log(managerName);
    console.log(managerId);
    console.log(managerEmail);
    console.log(managerOfficeNumber);
    console.log(managerRole);

    const managerCard = generateHTML.generateManager({ managerName, managerId, managerEmail, managerOfficeNumber, managerRole });
    const HTMLText = generateHTML.generateHTMLText(managerCard);
    writeToFile(HTMLText);
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
  fs.writeFile("./dist/index.html", HTMLText, (err) => (err ? console.error(err) : console.log("Success! The HTML webpage has been genarated.")));
}

/*
 init()
  initializatize the application
    * calls runInquirer function
*/
function init() {
  runInqurer();
}

// Initialize the application by calling init function
init();
