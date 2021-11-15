const Intern = require("../lib/Intern");

describe("Intern class", () => {
  describe("getSchool method", () => {
    it("Retrieves an Interns school", () => {
      const Bill = new Intern("Bill", 32, "bill@email.com", "UNH");

      expect(Bill.getSchool()).toEqual("UNH");
    });
  });
  describe("getRole method", () => {
    it("Retrieves an Interns role", () => {
      const Bill = new Intern("Bill", 32, "bill@email.com", "UNH");

      expect(Bill.getRole()).toEqual("Intern");
    });
  });
});
