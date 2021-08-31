const render = require("./src/page-template.js");
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");

const team =[];
 
function writeFile(team){
  fs.writeFileSync(outputPath, render(team), "utf-8");
}

function init(){
  inquirer
  .prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is your team Manager's name?",
      validate: answer =>{
        if(answer !== ""){
          return true;
        }
        return "Please enter Manager's name.";
      }
    },
    {
      type: "input",
      name: "managerId",
      message: "Input Manager's ID number",
      validate: answer =>{
        if(answer.match(/^[1-9]\d*$/) ){
          return true;
        }
        return "Please use only digits 0-9 for ID";
      } 
    },
    {
      type: "input",
      name: "managerEmail",
      message: "Input Manager's email address",
      validate: answer =>{
        if(answer.includes("@")){
          return true;
        }
        return "Please enter valid email address"
      }
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "Input Manager's office number",
      validate: answer =>{
        if(answer.match(/^[1-9]\d*$/) ){
          return true;
        }
        return "Please use only digits 0-9 for office number";
      } 
    },
  ])
  .then(answers =>{
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    team.push(manager);
    // writeFile(team);
    createTeam();
  });
};

function createTeam(){
  inquirer
  .prompt([
    {
      type: "list",
      name: "memberChoice",
      message: "Which Employee to Add Next?",
      choices: [
        "Engineer",
        "Intern",
        "No One Left to Add, Create My Team!",
      ]
    }
  ])
  .then(choice =>{
    switch (choice.memberChoice){
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      default:
        writeFile(team);
    }
  })
};

function addEngineer(){
  inquirer
  .prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is your Engineer's name?",
      validate: answer =>{
        if(answer !== ""){
          return true;
        }
        return "Please enter Engineer's name.";
      }
    },
    {
      type: "input",
      name: "engineerId",
      message: "Input Engineer's ID number",
      validate: answer =>{
        if(answer.match(/^[1-9]\d*$/) ){
          return true;
        }
        return "Please use only digits 0-9 for ID";
      } 
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "Input Engineer's email address",
      validate: answer =>{
        if(answer.includes("@")){
          return true;
        }
        return "Please enter valid email address"
      }
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "Input Engineer's GitHub Username",
      validate: answer =>{
        if(answer !== ""){
          return true;
        }
        return "Please enter valid Username.";
      } 
    },
  ])
  .then(answers =>{
    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
    team.push(engineer);
    // writeFile(team);
    createTeam();
  });
};

function addIntern(){
  inquirer
  .prompt([
    {
      type: "input",
      name: "internName",
      message: "What is your Intern's name?",
      validate: answer =>{
        if(answer !== ""){
          return true;
        }
        return "Please enter Intern's name.";
      }
    },
    {
      type: "input",
      name: "internId",
      message: "Input Intern's ID number",
      validate: answer =>{
        if(answer.match(/^[1-9]\d*$/) ){
          return true;
        }
        return "Please use only digits 0-9 for ID";
      } 
    },
    {
      type: "input",
      name: "internEmail",
      message: "Input Intern's email address",
      validate: answer =>{
        if(answer.includes("@")){
          return true;
        }
        return "Please enter valid email address"
      }
    },
    {
      type: "input",
      name: "internSchool",
      message: "What school soes your Intern attend?",
      validate: answer =>{
        if(answer !== ""){
          return true;
        }
        return "Please enter valid school.";
      } 
    },
  ])
  .then(answers =>{
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
    team.push(intern);
    // writeFile(team);
    createTeam();
  });
};


init();

  // new Manager("Trey", 1, "trey@trey.com",42),
  // new Engineer("Eve", 2, "eve@eve.com","Eveish"),
  // new Engineer("Rai", 4 ,"rai@rai.com","Raibaibai"),
  // new Intern ("Hank", 3, "hank@hank.com","GoodPup U"),  