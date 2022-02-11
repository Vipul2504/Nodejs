const fs = require("fs");
let text = fs.readFileSync("abc.txt", "utf-8");
text = text.replace("hello","vipul")
console.log("the content is")
console.log(text);
console.log("creating a new file.....")
fs.writeFileSync("pawan.txt",text)