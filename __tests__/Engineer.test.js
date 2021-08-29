const Engineer = require("../lib/Engineer");

describe("Engineer", () =>{
  test("Can instantiate Engineer", () =>{
    const employee = new Engineer();
    expect(typeof employee).toBe("object");
  });

  test("Can set name via constructor function", () => {
    const name = "Roy";
    const employee= new Engineer(name, 1234, "roy@roy.com","RoyBoy");
    expect(employee.name).toBe(name);
  });

  test("Can set id via constructor function", () => {
    const id = 1234;
    const employee= new Engineer("Roy", id, "roy@roy.com","RoyBoy");
    expect(employee.id).toBe(id);
  });

  test("Can set email via constructor function", () => {
    const email = "roy@roy.com";
    const employee= new Engineer("Roy", 1234, email,"RoyBoy");
    expect(employee.email).toBe(email);
  });

  test("Can set github via constructor function", () => {
    const github = "RoyBoy";
    const employee= new Engineer("Roy", 1234, "roy@roy.com", github);
    expect(employee.github).toBe(github);
  });
  
  test("test getRole() returns 'Engineer' ", () => {
    const role= "Engineer"
    const employee= new Engineer("Roy", 1234, "roy@roy.com","RoyBoy");
    expect(employee.getRole()).toBe(role);
  });
});