// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");
const employee = require("../lib/employee");
const engineer = require("../lib/engineer");
const intern = require("../lib/intern");
const manager = require("../lib/manager");

// create manager object, engineer array, and intern array to push data into
let newManagerObj = {};
let engineerArray = [];
let internArray = [];

// array of questions for the manager
const managerQuestions = [
  {
    name: "name",
    type: "input",
    message: "Enter your team Manager's name.",
    validate: function (input) {
      const valid = input !== "";
      return valid || "Please enter a name";
    },
  },

  {
    name: "id",
    type: "number",
    message: "Enter your team Manager's employee ID number.",
    validate: function (input) {
      const valid = Number.isInteger(input);
      return valid || "Please enter a number";
    },
    /*
    There is an inquirer bug when validating if the number is an integer. A "NaN" appears in the input
    and cannot be deleted. I searched for a solution and found the answer from user Rangel Stoilov
    https://stackoverflow.com/questions/62798907/how-to-clear-wrong-input-in-inquirer-js
    They suggested adding the filter below.  
    I used this code here any anywhere else with Number.isInteger(input).
    */
    filter: (input) => {
      return Number.isNaN(input) || Number(input) <= 0 ? "" : Number(input);
    },
  },

  {
    name: "email",
    type: "input",
    message: "Enter your team Manager's email.",
    validate: function (email) {
      const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      return valid || "Please enter a valid email address.";
    },
  },

  {
    name: "officeNumber",
    type: "number",
    message: "Enter your team Manager's office number.",
    validate: function (input) {
      const valid = Number.isInteger(input);
      return valid || "Please enter a number";
    },
    filter: (input) => {
      return Number.isNaN(input) || Number(input) <= 0 ? "" : Number(input);
    },
  },

  {
    name: "whatNext",
    type: "list",
    message: "How would you like to proceed?",
    choices: ["Add An Enginner to My Team", "Add an Intern to My Team", "Finish Building My Team"],
  },
];

// array of questions for an engineer
const engineerQuestions = [
  {
    name: "name",
    type: "input",
    message: "Enter your Engineer's name.",
    validate: function (input) {
      const valid = input !== "";
      return valid || "Please enter a name";
    },
  },

  {
    name: "id",
    type: "number",
    message: "Enter your Engineer's employee ID number.",
    validate: function (input) {
      const valid = Number.isInteger(input);
      return valid || "Please enter a number";
    },
    filter: (input) => {
      return Number.isNaN(input) || Number(input) <= 0 ? "" : Number(input);
    },
  },

  {
    name: "email",
    type: "input",
    message: "Enter your Engineer's email.",
    validate: function (email) {
      const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      return valid || "Please enter a valid email address.";
    },
  },

  {
    name: "github",
    type: "input",
    message: "Enter your Engineer's github account name.",
    validate: function (input) {
      const valid = input !== "";
      return valid || "Please enter a github account name";
    },
  },

  {
    name: "whatNext",
    type: "list",
    message: "How would you like to proceed?",
    choices: ["Add An Enginner to My Team", "Add an Intern to My Team", "Finish Building My Team"],
  },
];

// array of questions for an intern
const internQuestions = [
  {
    name: "name",
    type: "input",
    message: "Enter your Intern's name.",
    validate: function (input) {
      const valid = input !== "";
      return valid || "Please enter a name";
    },
  },

  {
    name: "id",
    type: "number",
    message: "Enter your Intern's employee ID number.",
    validate: function (input) {
      const valid = Number.isInteger(input);
      return valid || "Please enter a number";
    },
    filter: (input) => {
      return Number.isNaN(input) || Number(input) <= 0 ? "" : Number(input);
    },
  },

  {
    name: "email",
    type: "input",
    message: "Enter your Intern's email.",
    validate: function (email) {
      const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      return valid || "Please enter a valid email address.";
    },
  },

  {
    name: "school",
    type: "input",
    message: "Enter your Intern's school.",
    validate: function (input) {
      const valid = input !== "";
      return valid || "Please enter a school";
    },
  },

  {
    name: "whatNext",
    type: "list",
    message: "How would you like to proceed?",
    choices: ["Add An Enginner to My Team", "Add an Intern to My Team", "Finish Building My Team"],
  },
];

/*
 runInquirerForManager
  prompts the user with questions so they can add a Manager to the team, saves manager data as an object, 
  and asks user what they want to do next
    * prompts user with manager-related questions
    * takes in manager-related answers
    * loads data into the managerObj object
    * Checks to see what the user wants to do next
      * if they choose "Finish Building My Team", call finishBuildingTeam function
      * if they choose "Add and Engineer to My Team", call runInquirerForEngineer
      * if they choose "Add an Intern to My Team", call runInquirerForIntern        
*/
function runInquirerForManager() {
  inquirer.prompt(managerQuestions).then(function (answers) {
    const employeeManager = new manager(answers);

    newManagerObj.name = employeeManager.getName();
    newManagerObj.id = employeeManager.getId();
    newManagerObj.email = employeeManager.getEmail();
    newManagerObj.officeNumber = employeeManager.getOfficeNumber();
    newManagerObj.role = employeeManager.getRole();

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

/*
 runInquirerForEngineer
  prompts the user with questions so they can add an Engineer to the team, saves engineer data as an object 
  and pushes the object to the engineerArray, and asks user what they want to do next
    * prompts user with engineer-related questions
    * takes in engineer-related answers
    * loads data into an engineerObj object
    * pushes engineerObj object to engineerArray array
    * Checks to see what the user wants to do next
      * if they choose "Finish Building My Team", call finishBuildingTeam function
      * if they choose "Add and Engineer to My Team", call runInquirerForEngineer
      * if they choose "Add an Intern to My Team", call runInquirerForIntern        
*/
function runInquirerForEngineer() {
  inquirer.prompt(engineerQuestions).then(function (answers) {
    const employeeEngineer = new engineer(answers);

    let newEngineerObj = {};

    newEngineerObj.name = employeeEngineer.getName();
    newEngineerObj.id = employeeEngineer.getId();
    newEngineerObj.email = employeeEngineer.getEmail();
    newEngineerObj.github = employeeEngineer.getGithub();
    newEngineerObj.role = employeeEngineer.getRole();

    engineerArray.push(newEngineerObj);

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

/*
 runInquirerForIntern
  prompts the user with questions so they can add an intern to the team, saves intern data as an object 
  and pushes it to the internArray, and asks user what they want to do next
    * prompts user with intern-related questions
    * takes in intern-related answers
    * loads data into an internObj object
    * pushes internObj object to internArray array
    * Checks to see what the user wants to do next
      * if they choose "Finish Building My Team", call finishBuildingTeam function
      * if they choose "Add and Engineer to My Team", call runInquirerForEngineer
      * if they choose "Add an Intern to My Team", call runInquirerForIntern        
*/
function runInquirerForIntern() {
  inquirer.prompt(internQuestions).then(function (answers) {
    const employeeIntern = new intern(answers);

    let newInternObj = {};

    newInternObj.name = employeeIntern.getName();
    newInternObj.id = employeeIntern.getId();
    newInternObj.email = employeeIntern.getEmail();
    newInternObj.school = employeeIntern.getSchool();
    newInternObj.role = employeeIntern.getRole();

    internArray.push(newInternObj);

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

/*
 finishBuildingTeam
  creates Manager Card, loops through array to create Engineer Card(s), loops through array to create Intern Card(s), 
  generates HTMLText, and calls writeToFile and sends it HTMLText
    * Manager
      * sets manager properties from the newManagerObj
      * uses generateManager method from generateHTML.js to genereate a template literal manager card and return as "managerCard"
    * Engineer(s)
      * creates an empty string to add engineer cards as the array of objects is looped through
      * loops through engineerObj objects in engineerArray array
        * sets engineer properties from the engineerObj object
        * uses generateEngineer method from generateHTML.js to genereate a template literal engineer card and return as "engineerCard"
        * append engineerCard to engineerCardString
    * Intner(s)
      * creates an empty string to add intern cards as the array of objects is looped through
      * loops through internObj objects in internArray array
        * sets intern properties from the internObj object
        * uses generateIntern method from generateHTML.js to genereate a template literal intern card and return as "internCard"
        * append internCard to internCardString
    * sets HTMLText by sending managerCard, engineerCardString, and internCardString to generateHTMLText method from generateHTML.js 
    * calls WriteToFile and sends it HTMLText
*/
function finishBuildingTeam() {
  //Manager
  let managerName = newManagerObj.name;
  let managerId = newManagerObj.id;
  let managerEmail = newManagerObj.email;
  let managerOfficeNumber = newManagerObj.officeNumber;
  let managerRole = newManagerObj.role;

  const managerCard = generateHTML.generateManager(managerName, managerId, managerEmail, managerOfficeNumber, managerRole);

  // Engineer(s)
  let engineerCardString = "";

  engineerArray.forEach(function (engineerObj) {
    let engineerName = engineerObj.name;
    let engineerId = engineerObj.id;
    let engineerEmail = engineerObj.email;
    let engineerGithub = engineerObj.github;
    let engineerRole = engineerObj.role;

    const engineerCard = generateHTML.generateEngineer(engineerName, engineerId, engineerEmail, engineerGithub, engineerRole);

    engineerCardString += engineerCard;
  });

  // Intern(s)
  let internCardString = "";

  internArray.forEach(function (internObj) {
    let internName = internObj.name;
    let internId = internObj.id;
    let internEmail = internObj.email;
    let internSchool = internObj.school;
    let internRole = internObj.role;

    const internCard = generateHTML.generateIntern(internName, internId, internEmail, internSchool, internRole);

    internCardString += internCard;
  });

  const HTMLText = generateHTML.generateHTMLText(managerCard, engineerCardString, internCardString);
  writeToFile(HTMLText);
}

/*
 Write HTML file
  writes the index.html file using "HTMLText" from generateHTMLText.js
    * sets the destination to the dist folder
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
    * calls runInquirerForManager function
*/
function init() {
  runInquirerForManager();
}

// Initialize the application by calling init function
init();
