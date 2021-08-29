const Manager = require("../lib/Manager");

describe("Manager", () =>{
  test("Can instantiate Manager", () =>{
    const employee = new Manager();
    expect(typeof employee).toBe("object");
  });

  test("Can set name via constructor function", () => {
    const name = "Roy";
    const employee= new Manager(name, 1234, "roy@roy.com",782);
    expect(employee.name).toBe(name);
  });

  test("Can set id via constructor function", () => {
    const id = 1234;
    const employee= new Manager("Roy", id, "roy@roy.com",782);
    expect(employee.id).toBe(id);
  });

  test("Can set email via constructor function", () => {
    const email = "roy@roy.com";
    const employee= new Manager("Roy", 1234, email,782);
    expect(employee.email).toBe(email);
  });

  test("Can set officeNumber via constructor function", () => {
    const officeNumber = 782;
    const employee= new Manager("Roy", 1234, "roy@roy.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
  });
  
  test("test getRole() returns 'Manager' ", () => {
    const role= "Manager"
    const employee= new Manager("Roy", 1234, "roy@roy.com",782);
    expect(employee.getRole()).toBe(role);
  });
});