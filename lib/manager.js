// Extends employee class
const Employee = require("./employee");

// In addition to Employee's properties and methods, Manager will also have the following:
// officeNumber
// getRole()—overridden to return 'Manager'
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    console.log(`This Manager's office number is ${this.officeNumber}.`);
  }

  getRole() {
    return "Manager";
  }
}

// module to export
module.exports = Manager;
