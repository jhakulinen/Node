var fs = require("fs");
var data = fs.readFileSync("teksti.txt")
var data2 = fs.readFileSync("teksti2.txt")


fs.writeFileSync('./testi/uusiFile.txt', data);

fs.appendFileSync('./testi/uusiFile.txt', data2);




