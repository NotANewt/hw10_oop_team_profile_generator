const Employee = require("../lib/employee");

/*
Initialization test
    * it should return an object containing name, number, and id properties when called with the 'new' keyword
    
getName test
    * it should return 'name' when called

getId test
    * it should return 'id' when created

getEmail test
    * it should return 'email' when created

getRole test
    * it should return 'Employee' when created
*/

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object containing 'name', 'id', and 'email' properties when called with the 'new' keyword", () => {
      const obj = new Employee({});

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
    });

    it("should set 'name', 'id', and 'email' when created", () => {
      const name = "david blaine";
      const id = "001";
      const email = "david.blaine@magic.com";
      const role = "Employee";

      const obj = new Employee({ name, id, email });

      expect(obj.getName()).toEqual(name);
      expect(obj.getId()).toEqual(id);
      expect(obj.getEmail()).toEqual(email);
      expect(obj.getRole()).toEqual(role);
    });
  });
});
