// Extends employee class
const Employee = require("./employee");

/*
Engineer class
    * extends Employee class
    * properties: name, id, email, github
    * methods: getName(), getId(), getEmail(), getGithub(), and getRole() that returns 'Engineer'
*/
class Engineer extends Employee {
  constructor({ name, id, email, github }) {
    super({ name, id, email });
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

// module to export
module.exports = Engineer;
