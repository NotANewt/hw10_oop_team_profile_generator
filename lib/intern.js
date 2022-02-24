// Extends employee class
const Employee = require("./employee");

/*
Intern class
    * extends Employee class
    * properties: name, id, email, school
    * methods: getName(), getId(), getEmail(), getSchool(), and getRole() that returns 'Intern'
*/
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
