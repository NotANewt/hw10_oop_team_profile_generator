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

    it("should set 'name' when created", () => {
      const name = "david blaine";

      const obj = new Manager({ name });

      expect(obj.name).toEqual(name);
    });

    it("should set 'id' when created", () => {
      const id = "001";

      const obj = new Manager({ id });

      expect(obj.id).toEqual(id);
    });

    it("should set 'email' when created", () => {
      const email = "david.blaine@magic.com";

      const obj = new Manager({ email });

      expect(obj.email).toEqual(email);
    });

    it("should set 'officeNumber' when created", () => {
      const officeNumber = "137";

      const obj = new Manager({ officeNumber });

      expect(obj.officeNumber).toEqual(officeNumber);
    });
  });

  describe("getName", () => {
    //   getName method should return supplied name when called
    it("should return 'name' when called", () => {
      // define name
      const name = "david blaine";
      //   pass 'name' into .getName() and set that value to returnedName
      const returnedName = new Manager({}).getName({ name });
      //   expect 'returnedName' to equal 'name'
      expect(returnedName).toEqual(name);
    });
  });

  describe("getId", () => {
    //   getId method should return supplied id when called
    it("should return 'id' when called", () => {
      // define id
      const id = "001";
      //   pass 'id' into .getId() and set that value to returnedId
      const returnedId = new Manager({}).getId({ id });
      //   expect 'returnedId' to equal 'id'
      expect(returnedId).toEqual(id);
    });
  });

  describe("getEmail", () => {
    //   getEmail method should return supplied email when called
    it("should return 'email' when called", () => {
      // define email
      const email = "david.blaine@magic.com";
      //   pass 'email' into .getEmail() and set that value to returnedEmail
      const returnedEmail = new Manager({}).getEmail({ email });
      //   expect 'returnedEmail' to equal 'email'
      expect(returnedEmail).toEqual(email);
    });
  });

  describe("getOfficeNumber", () => {
    //   getOfficeNumber method should return supplied officeNumber when called
    it("should return 'officeNumber' when called", () => {
      // define officeNumber
      const officeNumber = "137";
      //   pass 'officeNumber' into .getOfficeNumber() and set that value to returnedOfficeNumber
      const returnedOfficeNumber = new Manager({}).getOfficeNumber({ officeNumber });
      //   expect 'returnedOfficeNumber' to equal 'officeNumber'
      expect(returnedOfficeNumber).toEqual(officeNumber);
    });
  });

  describe("getRole", () => {
    //   getRole method should return "Manager" when called
    it("should return 'Manager' when called", () => {
      // define role
      const role = "Manager";
      //   call .getRole() and set the returned value to returnedRole
      const returnedRole = new Manager({}).getRole({});
      //   expect 'returnedRole' to equal 'role'
      expect(returnedRole).toEqual(role);
    });
  });
});
