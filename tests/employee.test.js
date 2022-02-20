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

    it("should set 'name' when created", () => {
      const name = "david blaine";

      const obj = new Employee({ name });

      expect(obj.name).toEqual(name);
    });

    it("should set 'id' when created", () => {
      const id = "001";

      const obj = new Employee({ id });

      expect(obj.id).toEqual(id);
    });

    it("should set 'email' when created", () => {
      const email = "david.blaine@magic.com";

      const obj = new Employee({ email });

      expect(obj.email).toEqual(email);
    });
  });

  describe("getName", () => {
    //   getName method should return supplied name when called
    it("should return 'name' when called", () => {
      // define name
      const name = "david blaine";
      //   pass 'name' into .getName() and set that value to returnedName
      const returnedName = new Employee({}).getName({ name });
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
      const returnedId = new Employee({}).getId({ id });
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
      const returnedEmail = new Employee({}).getEmail({ email });
      //   expect 'returnedEmail' to equal 'email'
      expect(returnedEmail).toEqual(email);
    });
  });

  describe("getRole", () => {
    //   getEmail method should return "Employee" when called
    it("should return 'Employee' when called", () => {
      // define role
      const role = "Employee";
      //   call .getRole() and set the returned value to returnedRole
      const returnedRole = new Employee({}).getRole({});
      //   expect 'returnedRole' to equal 'role'
      expect(returnedRole).toEqual(role);
    });
  });
});
