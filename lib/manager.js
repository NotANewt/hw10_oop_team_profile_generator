// Extends employee class
const Employee = require("./employee");

/*
Manager class
    * extends Employee class
    * properties: name, id, email, officeNumber
    * methods: getName(), getId(), getEmail(), getOfficeNumber(), and getRole() that returns 'Manager'
*/

class Manager extends Employee {
  constructor({ name, id, email, officeNumber }) {
    super({ name, id, email });
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

// module to export
module.exports = Manager;
