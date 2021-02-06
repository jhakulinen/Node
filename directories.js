var fs = require("fs");

const folderName = '/users/jukka/desktop/node/node/testi2';

try{
    if (!fs.existsSync(folderName)){
        fs.mkdirSync(folderName)
    }
} catch (err){
    console.error(err)
}