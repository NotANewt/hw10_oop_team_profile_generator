// links to required files and packages

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

/*
 Write README file
  writes the README file using "HTMLText" from generateHTMLText.js
    * titles file "index.html"
    * writes file using "HTMLText" from generateHTMLText.js
    * if there is an error, console error
    * if the file is written successfully, console log sucess.
*/

/*
 init()
  initializatize the application
    * calls runInquirer function
*/
// function init() {
//     runInqurer();
//   }

// Initialize the application by calling init function
//   init();
