// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");
const employee = require("../lib/employee");
const engineer = require("../lib/engineer");
const intern = require("../lib/intern");
const manager = require("../lib/manager");

// Employee array to hold generated manager, engineers, and interns
let newManagerObj = {};
let engineerArray = [];
let internArray = [];

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
    name: "school",
    type: "input",
    message: "Enter your Intern's school.",
  },

  {
    name: "whatNext",
    type: "list",
    message: "How would you like to proceed?",
    choices: ["Add An Enginner to My Team", "Add an Intern to My Team", "Finish Building My Team"],
  },
];

function runInquirerForManager() {
  inquirer.prompt(managerQuestions).then(function (answers) {
    const employeeManager = new manager(answers);

    // load data into object
    newManagerObj.name = employeeManager.getName();
    newManagerObj.id = employeeManager.getId();
    newManagerObj.email = employeeManager.getEmail();
    newManagerObj.officeNumber = employeeManager.getOfficeNumber();
    newManagerObj.role = employeeManager.getRole();

    // check what to do next
    let whatNext = answers.whatNext;

    if (whatNext === "Finish Building My Team") {
      finishBuildingTeam();
    } else if (whatNext === "Add An Enginner to My Team") {
      runInquirerForEngineer();
    } else {
      runInquirerForIntern();
    }
  });
}

function runInquirerForEngineer() {
  inquirer.prompt(engineerQuestions).then(function (answers) {
    const employeeEngineer = new engineer(answers);

    // create the object
    let newEngineerObj = {};

    // load data into object
    newEngineerObj.name = employeeEngineer.getName();
    newEngineerObj.id = employeeEngineer.getId();
    newEngineerObj.email = employeeEngineer.getEmail();
    newEngineerObj.github = employeeEngineer.getGithub();
    newEngineerObj.role = employeeEngineer.getRole();

    // push new object into the array
    engineerArray.push(newEngineerObj);

    let whatNext = answers.whatNext;

    if (whatNext === "Finish Building My Team") {
      //TODO: make finishBuildingTeam function
      finishBuildingTeam();
      // const HTMLText = generateHTML.generateHTMLText(managerCard);
      // writeToFile(HTMLText);
    } else if (whatNext === "Add An Enginner to My Team") {
      runInquirerForEngineer();
    } else {
      runInquirerForIntern();
    }
  });
}

function runInquirerForIntern() {
  inquirer.prompt(internQuestions).then(function (answers) {
    const employeeIntern = new intern(answers);

    // create object
    let newInternObj = {};

    // load data into object
    newInternObj.name = employeeIntern.getName();
    newInternObj.id = employeeIntern.getId();
    newInternObj.email = employeeIntern.getEmail();
    newInternObj.school = employeeIntern.getSchool();
    newInternObj.role = employeeIntern.getRole();

    // push new object into the array
    internArray.push(newInternObj);

    let whatNext = answers.whatNext;

    if (whatNext === "Finish Building My Team") {
      //TODO: make finishBuildingTeam function
      finishBuildingTeam();
      // const HTMLText = generateHTML.generateHTMLText(managerCard);
      // writeToFile(HTMLText);
    } else if (whatNext === "Add An Enginner to My Team") {
      runInquirerForEngineer();
    } else {
      runInquirerForIntern();
    }
  });
}

function finishBuildingTeam() {
  //manager
  let managerName = newManagerObj.name;
  let managerId = newManagerObj.id;
  let managerEmail = newManagerObj.email;
  let managerOfficeNumber = newManagerObj.officeNumber;
  let managerRole = newManagerObj.role;

  const managerCard = generateHTML.generateManager(managerName, managerId, managerEmail, managerOfficeNumber, managerRole);

  // enginners
  //create the string to add engineer cards
  let engineerCardString = "";

  // loop through engineerArray
  engineerArray.forEach(function (engineerObj) {
    let engineerName = engineerObj.name;
    let engineerId = engineerObj.id;
    let engineerEmail = engineerObj.email;
    let engineerGithub = engineerObj.github;
    let engineerRole = engineerObj.role;

    const engineerCard = generateHTML.generateEngineer(engineerName, engineerId, engineerEmail, engineerGithub, engineerRole);

    engineerCardString += engineerCard;
  });

  // interns
  // create the string to add intern cards
  let internCardString = "";

  // loop through inernArray
  internArray.forEach(function (internObj) {
    let internName = internObj.name;
    let internId = internObj.id;
    let internEmail = internObj.email;
    let internSchool = internObj.school;
    let internRole = internObj.role;

    const internCard = generateHTML.generateIntern(internName, internId, internEmail, internSchool, internRole);

    // append internCard to existing internCardString
    internCardString += internCard;
  });

  const htmlTextTop = generateHTML.generateHTMLTextTop();
  const htmlTextBottom = generateHTML.generateHTMLTextBottom();
  const HTMLText = generateHTML.generateHTMLText(htmlTextTop, htmlTextBottom, managerCard, engineerCardString, internCardString);
  writeToFile(HTMLText);
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

// const managerName = employeeManager.name;
// const managerId = employeeManager.id;
// const managerEmail = employeeManager.email;
// const managerOfficeNumber = employeeManager.officeNumber;
// const managerRole = employeeManager.getRole();
// const managerCard = generateHTML.generateManager({ managerName, managerId, managerEmail, managerOfficeNumber, managerRole });

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
