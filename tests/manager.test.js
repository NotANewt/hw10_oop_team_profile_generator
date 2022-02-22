const Manager = require("../lib/manager");

/*

Initialization test
    * it should return an object containing name, number, and id properties when called with the 'new' keyword
    
getName test
    * it should return 'name' when created

getId test
    * it should return 'id' when created

getEmail test
    * it should return 'email' when created

getOfficeNumber test
    * it should return 'officeNumber' when created

getRole test
    * it should return 'Manager' when created


*/

describe("Manager", () => {
  describe("Initialization", () => {
    it("should return an object containing 'name', 'id', 'email', and 'officeNumber' properties when called with the 'new' keyword", () => {
      const obj = new Manager({});

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
      expect("officeNumber" in obj).toEqual(true);
    });

    it("should set 'name', 'id', 'email', and 'officeNumber' when created", () => {
      const name = "david blaine";
      const id = "001";
      const email = "david.blaine@magic.com";
      const officeNumber = "137";
      const role = "Manager";

      const obj = new Manager({ name, id, email, officeNumber });

      expect(obj.getName()).toEqual(name);
      expect(obj.getId()).toEqual(id);
      expect(obj.getEmail()).toEqual(email);
      expect(obj.getOfficeNumber()).toEqual(officeNumber);
      expect(obj.getRole()).toEqual(role);
    });
  });
});
