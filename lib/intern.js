// Extends employee class
const Employee = require("./employee");

// In addition to Employee's properties and methods, Intern will also have the following:
// school
// getSchool()
// getRole()—overridden to return 'Intern'
class Intern extends Employee {
  constructor({ name, id, email, school }) {
    super({ name, id, email });
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

// module to export
module.exports = Intern;
