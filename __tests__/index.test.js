const index = require("../index");

// describe("writeToFile", () => {
//   it("should call fs.writeFile with the passed in 'path' and 'data' arguments", (done) => {
//     const message = "Hello World!";
//     const file = "message.txt";
//     const mock = jest.spyOn(console, "log");
//     mock.mockImplementation(() => {});
//     index.writeToFile(file, message);

//     expect(fs.writeFile).lastCalledWith(file, message);
//     done();
//   });
// });

describe("quetionfunc", () => {
  it("Should return array of questions", () => {
    questions = index.questionFunc();
    expect(index.questionFunc()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "name" }),
        expect.objectContaining({ name: "id" }),
        expect.objectContaining({ name: "email" }),
        expect.objectContaining({ name: "teamMember" }),
        //expect.objectContaining({ name: "manager" || "engineer" || "intern" }),
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
