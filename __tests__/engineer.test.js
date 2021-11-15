const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  describe("getGithub method", () => {
    it("Retrieves an Engineers github", () => {
      const Bill = new Engineer("Bill", 32, "bill@email.com", "billgithub");

      expect(Bill.getGithub()).toEqual("billgithub");
    });
  });
  describe("getRole method", () => {
    it("Retrieves an Engineers role", () => {
      const Bill = new Engineer("Bill", 32, "bill@email.com", "billgithub");

      expect(Bill.getRole()).toEqual("Engineer");
    });
  });
});
