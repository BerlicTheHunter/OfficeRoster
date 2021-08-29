const render = require("./src/page-template.js");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");

const team =[
  new Manager("Trey", 1, "trey@trey.com",42),
  new Engineer("Eve", 2, "eve@eve.com","Eveish"),
  new Engineer("Rai", 4 ,"rai@rai.com","Raibaibai"),
  new Intern ("Hank", 3, "hank@hank.com","GoodPup U")];
 
fs.writeFileSync(outputPath, render(team), "utf-8");