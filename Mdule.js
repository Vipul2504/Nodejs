const fs = require("fs");
const text = fs.readFileSync("hsh.txt","utf-8");
text = text.replace("nodejs","pawan");
 console.log("the content of the file is");
 comsole.log(text);
 console.log("creating a new file...")
 fs.writeFileSync("pawan.txt",txt)