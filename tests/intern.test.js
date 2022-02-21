const Intern = require("../lib/intern");

/*

Initialization test
    * it should return an object containing name, number, and id properties when called with the 'new' keyword
    
getName test
    * it should return 'name' when created

getId test
    * it should return 'id' when created

getEmail test
    * it should return 'email' when created

getSchool test
    * it should return 'school' when created

getRole test
    * it should return 'Intern' when created


*/

describe("Intern", () => {
  describe("Initialization", () => {
    it("should return an object containing 'name', 'id', 'email', and 'school' properties when called with the 'new' keyword", () => {
      const obj = new Intern({});

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
      expect("school" in obj).toEqual(true);
    });

    it("should set 'name' when created", () => {
      const name = "david blaine";

      const obj = new Intern({ name });

      expect(obj.name).toEqual(name);
    });

    it("should set 'id' when created", () => {
      const id = "001";

      const obj = new Intern({ id });

      expect(obj.id).toEqual(id);
    });

    it("should set 'email' when created", () => {
      const email = "david.blaine@magic.com";

      const obj = new Intern({ email });

      expect(obj.email).toEqual(email);
    });

    it("should set 'school' when created", () => {
      const school = "School of Magic";

      const obj = new Intern({ school });

      expect(obj.school).toEqual(school);
    });
  });

  describe("getName", () => {
    //   getName method should return supplied name when called
    it("should return 'name' when called", () => {
      // define name
      const name = "david blaine";
      //   pass 'name' into .getName() and set that value to returnedName
      const returnedName = new Intern({}).getName({ name });
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
      const returnedId = new Intern({}).getId({ id });
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
      const returnedEmail = new Intern({}).getEmail({ email });
      //   expect 'returnedEmail' to equal 'email'
      expect(returnedEmail).toEqual(email);
    });
  });

  describe("getSchool", () => {
    //   getSchool method should return supplied school when called
    it("should return 'school' when called", () => {
      // define school
      const school = "School of Magic";
      //   pass 'school' into .getSchool() and set that value to returnedSchool
      const returnedSchool = new Intern({}).getSchool({ school });
      //   expect 'returnedSchool' to equal 'school'
      expect(returnedSchool).toEqual(school);
    });
  });

  describe("getRole", () => {
    //   getRole method should return "Intern" when called
    it("should return 'Intern' when called", () => {
      // define role
      const role = "Intern";
      //   call .getRole() and set the returned value to returnedRole
      const returnedRole = new Intern({}).getRole({});
      //   expect 'returnedRole' to equal 'role'
      expect(returnedRole).toEqual(role);
    });
  });
});
