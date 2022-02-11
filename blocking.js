const fs = require("fs");
const text = fs.readFile("abc.txt","utf-8", (err,data)=>{
    console.log(data)
});
console.log(text);
