var fs = require("fs");

fs.rmdir("./testi2", (err)=>{
    if (err){
        console.log(err);
    } else {
        console.log("Kansio poistettu!")
    }
})