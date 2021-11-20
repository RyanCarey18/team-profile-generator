const index = require("../index");

describe("quetionfunc", () => {
  it("Should return array of questions", () => {
    questions = index.questionFunc();
    expect(index.questionFunc()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "name" }),
        expect.objectContaining({ name: "id" }),
        expect.objectContaining({ name: "email" }),
        expect.objectContaining({ name: "teamMember" }),
      ])
    );
  });
});

describe("createEmployee Function", () => {
  it("Should create a new Manager", () => {
    response = [
      { name: "Joe", id: 1, email: "joe@email.com", officeNumber: 15 },
    ];
    employee = [];
  });
});

describe("init Function", () => {
  it("Should create a new Manager", () => {
    response = [
      { name: "Joe", id: 1, email: "joe@email.com", officeNumber: 15 },
    ];
    employee = [];
  });
});
