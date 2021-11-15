const Manager = require("../lib/Manager");

describe("Manager class", () => {
  describe("getRole method", () => {
    it("Retrieves an Managers role", () => {
      const Bill = new Manager("Bill", 32, "bill@email.com", 55);

      expect(Bill.getRole()).toEqual("Manager");
    });
  });
});
