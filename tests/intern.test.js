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

    it("should set 'name', 'id', 'email', and 'school' when created", () => {
      const name = "david blaine";
      const id = "001";
      const email = "david.blaine@magic.com";
      const school = "School of Magic";
      const role = "Intern";

      const obj = new Intern({ name, id, email, school });

      expect(obj.getName()).toEqual(name);
      expect(obj.getId()).toEqual(id);
      expect(obj.getEmail()).toEqual(email);
      expect(obj.getSchool()).toEqual(school);
      expect(obj.getRole()).toEqual(role);
    });
  });
});
