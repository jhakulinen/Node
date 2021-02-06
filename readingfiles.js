const { fstat } = require("fs");
var fs = require("fs");
var data = fs.readFileSync("teksti.txt");
var data2 = fs.readFileSync("teksti2.txt");

console.log("Program started:");
console.log(data.toString());
console.log(data2.toString());
console.log("Program ended")