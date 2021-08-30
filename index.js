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
    writeFile(team);
  });
};

init();

  // new Manager("Trey", 1, "trey@trey.com",42),
  // new Engineer("Eve", 2, "eve@eve.com","Eveish"),
  // new Engineer("Rai", 4 ,"rai@rai.com","Raibaibai"),
  // new Intern ("Hank", 3, "hank@hank.com","GoodPup U"),  