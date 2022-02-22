/*
 generateManager
  generates what will go in the Manager Card
    * takes in answers and data from manager.js, engineer.js, and intern.js
    * uses a template literal for the layout of the HTML file with the supplied answers added into the template
    * returns the template literal
*/
function generateManager() {
  console.log("here is a manager!");
}

/*
 generateHTMLText
  generates what will go in the HTML file
    * takes in answers and data from manager.js, engineer.js, and intern.js
    * uses a template literal for the layout of the HTML file with the supplied answers added into the template
    * returns the template literal
*/
function generateHTMLText({ managerName, managerId, managerEmail, managerOfficeNumber, managerRole }) {
  return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/49aab69f62.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <!-- header -->
    <header>
        <h1>My Team</h1>
    </header>

    <div class="container">

        <!-- Manager sample card -->
        <div class="card">

            <div class="card_top">
                <p class="name">${managerName}</p>
                <p class="employeeType"><i class="fa-solid fa-mug-hot"></i> ${managerRole}</p>
            </div>

            <div class="card_info">
                <p class="card_id">ID: ${managerId}</p>
                <p class="card_email">Email: <a href="mailto:${managerEmail}">${managerEmail}</a>
                </p>
                <p class="card_officeNumber">Office Number: ${managerOfficeNumber}</p>
            </div>
        </div>   
    </div>

    <!-- footer -->
    <footer class="">
        <p class="">Made with &#9825; and OOP by <a class="no-text-decor" href="https://github.com/NotANewt"
                target="_blank">Meegan</a></p>
    </footer>
</body>

</html>`;
}

// modules to export
module.exports = { generateHTMLText };
