const render = require("./src/page-template.js");

const team =[
  {
    name: 'Brandon',
    id: 0001,
    email: "bs@bs.com",
    role:"manager",
    officeNumber: 42
  },
  {
    name: 'Raina',
    id: 0002,
    email: "rs@rs.com",
    role:"engineer",
    github: 'raybaybay',
  },
  {
    name: 'Hank',
    id: 0003,
    email: "hank@goodestboy.com",
    role:"intern",
    school: 'GoodPupU'
  }
];

console.log(render(team));