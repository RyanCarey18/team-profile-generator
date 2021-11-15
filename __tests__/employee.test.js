const Employee = require("../lib/employee");

describe("Employee class", () => {
  describe("getName method", () => {
    it("Retrieves an employees name", () => {
      const Bill = new Employee("Bill", 32, "bill@email.com");

      expect(Bill.getName()).toEqual("Bill");
    });
  });
  describe("getId method", () => {
    it("Retrieves an employees ID", () => {
      const Bill = new Employee("Bill", 32, "bill@email.com");

      expect(Bill.getId()).toEqual(32);
    });
  });
  describe("getEmail method", () => {
    it("Retrieves an employees Email", () => {
      const Bill = new Employee("Bill", 32, "bill@email.com");

      expect(Bill.getEmail()).toEqual("bill@email.com");
    });
  });
  describe("getRole method", () => {
    it("Retrieves an employees role", () => {
      const Bill = new Employee("Bill", 32, "bill@email.com");

      expect(Bill.getRole()).toEqual("Employee");
    });
  });
});
