const Engineer = require("../lib/engineer");

/*

Initialization test
    * it should return an object containing name, number, and id properties when called with the 'new' keyword
    
getName test
    * it should return 'name' when created

getId test
    * it should return 'id' when created

getEmail test
    * it should return 'email' when created

getGithub test
    * it should return 'github' when created

getRole test
    * it should return 'Engineer' when created
*/

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should return an object containing 'name', 'id', 'email', and github properties when called with the 'new' keyword", () => {
      const obj = new Engineer({});

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
      expect("github" in obj).toEqual(true);
    });

    it("should set 'name' when created", () => {
      const name = "david blaine";

      const obj = new Engineer({ name });

      expect(obj.name).toEqual(name);
    });

    it("should set 'id' when created", () => {
      const id = "001";

      const obj = new Engineer({ id });

      expect(obj.id).toEqual(id);
    });

    it("should set 'email' when created", () => {
      const email = "david.blaine@magic.com";

      const obj = new Engineer({ email });

      expect(obj.email).toEqual(email);
    });

    it("should set 'github' when created", () => {
      const github = "StreetMagic";

      const obj = new Engineer({ github });

      expect(obj.github).toEqual(github);
    });
  });

  describe("getName", () => {
    //   getName method should return supplied name when called
    it("should return 'name' when called", () => {
      // define name
      const name = "david blaine";
      //   pass 'name' into .getName() and set that value to returnedName
      const returnedName = new Engineer({}).getName({ name });
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
      const returnedId = new Engineer({}).getId({ id });
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
      const returnedEmail = new Engineer({}).getEmail({ email });
      //   expect 'returnedEmail' to equal 'email'
      expect(returnedEmail).toEqual(email);
    });
  });

  describe("getGithub", () => {
    //   getGithub method should return supplied github when called
    it("should return 'github' when called", () => {
      // define github
      const github = "StreetMagic";
      //   pass 'github' into .getGithub() and set that value to returnedGithub
      const returnedGithub = new Engineer({}).getGithub({ github });
      //   expect 'returnedGithub' to equal 'github'
      expect(returnedGithub).toEqual(github);
    });
  });

  describe("getRole", () => {
    //   getRole method should return "Engineer" when called
    it("should return 'Engineer' when called", () => {
      // define role
      const role = "Engineer";
      //   call .getRole() and set the returned value to returnedRole
      const returnedRole = new Engineer({}).getRole({});
      //   expect 'returnedRole' to equal 'role'
      expect(returnedRole).toEqual(role);
    });
  });
});
