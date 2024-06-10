let a = [
  { name: "Dave", js: 59, react: 64, node: 67 },
  { name: "George", js: 58, react: 82, node: 65 },
  { name: "William", js: 51, react: 56, node: 68 },
  { name: "Anita", js: 62, react: 65, node: 56 },
  { name: "Thomas", js: 68, react: 72, node: 75 },
  { name: "Steve", js: 56, react: 51, node: 63 },
  { name: "Julia", js: 47, react: 77, node: 72 },
  { name: "Mary", js: 72, react: 55, node: 81 },
];

let totalmarksinnode = 0;
for (item of a) {
  totalmarksinnode = totalmarksinnode + item.js;
}
console.log("total marks in js:", totalmarksinnode);
let specifiedmarksinreact = 0;
for (item of a) {
  item.react > 70 ? specifiedmarksinreact++ : specifiedmarksinreact;
}
console.log("no of students with more than 70 marks:", specifiedmarksinreact);

let highestmarksinnode = 0;
for (item of a) {
  highestmarksinnode < item.node
    ? (highestmarksinnode = item.node)
    : highestmarksinnode;
}
console.log("highest marks in node:", highestmarksinnode);
let morethan60inreactarr = [];
for (item of a) {
  item.js > 60 ? morethan60inreactarr.push(item.name) : morethan60inreactarr;
}
console.log("students who scored more than 60 in js:", morethan60inreactarr);

let totalmarksmorethan = [];

for (item of a) {
  if (item.js + item.react + item.node > 175) {
    totalmarksmorethan.push(item.name);
  }
}
console.log("total marks more than 175:", totalmarksmorethan);

let arr = [];
for (item of a) {
  let ob = {};
  ob.name = item.name;
  ob.js = grader(item.js);
  ob.react = grader(item.react);
  ob.node = grader(item.node);
  arr.push(ob);
}
console.log(arr);
function grader(score) {
  if (score >= 75) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else {
    return "C";
  }
}
