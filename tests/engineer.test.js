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
      const id = "001";
      const email = "david.blaine@magic.com";
      const github = "StreetMagic";
      const role = "Engineer";

      const obj = new Engineer({ name, id, email, github });

      expect(obj.getName()).toEqual(name);
      expect(obj.getId()).toEqual(id);
      expect(obj.getEmail()).toEqual(email);
      expect(obj.getGithub()).toEqual(github);
      expect(obj.getRole()).toEqual(role);
    });
  });
});
