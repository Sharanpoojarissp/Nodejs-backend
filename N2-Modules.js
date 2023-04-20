/* now we will see built in modules --> importing thing we didnot wrote 
modules have functions 

built in modules in nodejs : google it and we have list of modules which can be used 

eq : filesysytem , os  , buffer , crypto etc 

we will use fs to simply read and write a file in nodejs    */


// change nhi karna 
// const fs = require("fs");
// const text = fs.readFileSync("dele.txt" , "utf-8");

// console.log(text);
// simply returns the op as it reads the txt file 

// console.log(" the content of the dele file is : " , text);

// content replace ke liye let 
let fs = require("fs");
let text = fs.readFileSync("dele.txt" , "utf-8");
text = text.replace("sharan" , "karan");
console.log(" the content of the dele file is : " , text);

console.log("new file  ");
fs.writeFileSync("this.txt" , text);


// modules can be third party like npm , built in or self made modile 