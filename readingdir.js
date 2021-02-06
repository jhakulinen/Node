var fs = require("fs");
const directory = './'

fs.readdir(directory, (err, files)=>{
    if (err)
        console.log(err);
    else{
        console.log("\nTiedostot:");
    files.forEach(file => {
        console.log(file);
    })
    }
})