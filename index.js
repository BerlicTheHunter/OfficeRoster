const render = require("./src/page-template.js");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");

const team =[
  new Manager("Trey", 1, "trey@trey.com"),
  new Engineer("Eve", 2, "eve@eve.com"),
  new Engineer("Rai", 4 ,"rai@rai.com"),
  new Intern ("Hank", 3, "hank@hank.com")];
  
  // {
  //   name: 'Brandon',
  //   id: 0001,
  //   email: "bs@bs.com",
  //   role:"manager",
  //   officeNumber: 42
  // },
  // {
  //   name: 'Raina',
  //   id: 0002,
  //   email: "rs@rs.com",
  //   role:"engineer",
  //   github: 'raybaybay',
  // },
  // {
  //   name: 'Hank',
  //   id: 0003,
  //   email: "hank@goodestboy.com",
  //   role:"intern",
  //   school: 'GoodPupU'
  // }
  // ];

fs.writeFileSync(outputPath, render(team), "utf-8");