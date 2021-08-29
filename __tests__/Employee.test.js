
const Employee = require("../lib/Employee");

describe("Employee", () =>{
  test("Can instantiate Employee", () =>{
    const employee = new Employee();
    expect(typeof employee).toBe("object");
  });

  test("Can set name via constructor function", () => {
    const name = "Roy";
    const employee= new Employee(name, 1234, "roy@roy.com");
    expect(employee.name).toBe(name);
  });

  test("Can set id via constructor function", () => {
    const id = 1234;
    const employee= new Employee("Roy", id, "roy@roy.com");
    expect(employee.id).toBe(id);
  });

  test("Can set email via constructor function", () => {
    const email = "roy@roy.com";
    const employee= new Employee("Roy", 1234, email);
    expect(employee.email).toBe(email);
  });

  test("test getRole() returns 'Employee' ", () => {
    const role= "Employee"
    const employee= new Employee("Roy", 1234, "roy@roy.com");
    expect(employee.getRole()).toBe(role);
  });
});