/*
Employee parent class
    * properties: name, id, email
    * methods: getName(), getId(), getEmail(), and getRole() that returns 'Employee'
*/

class Employee {
  constructor({ name, id, email }) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

// module to export
module.exports = Employee;
