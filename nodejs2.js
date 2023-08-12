const fs =  require("fs");
let text = fs.readFileSync("delete.txt","utf-8");
console.log("context of delete file =")
text =text.replace("context","content");
console.log(text);
console.log("creating new file")
fs.writeFileSync("new.txt",text);