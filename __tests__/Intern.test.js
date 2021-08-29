const Intern = require("../lib/Intern");

describe("Intern", () =>{
  test("Can instantiate Intern", () =>{
    const employee = new Intern();
    expect(typeof employee).toBe("object");
  });

  test("Can set name via constructor function", () => {
    const name = "Roy";
    const employee= new Intern(name, 1234, "roy@roy.com","Ole Miss");
    expect(employee.name).toBe(name);
  });

  test("Can set id via constructor function", () => {
    const id = 1234;
    const employee= new Intern("Roy", id, "roy@roy.com","Ole Miss");
    expect(employee.id).toBe(id);
  });

  test("Can set email via constructor function", () => {
    const email = "roy@roy.com";
    const employee= new Intern("Roy", 1234, email,"Ole Miss");
    expect(employee.email).toBe(email);
  });

  test("Can set school via constructor function", () => {
    const school = "Ole Miss";
    const employee= new Intern("Roy", 1234, "roy@roy.com", school);
    expect(employee.school).toBe(school);
  });
  
  test("test getRole() returns 'Intern' ", () => {
    const role= "Intern"
    const employee= new Intern("Roy", 1234, "roy@roy.com","Ole Miss");
    expect(employee.getRole()).toBe(role);
  });
});