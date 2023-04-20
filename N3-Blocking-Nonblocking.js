//! blocking and non blocking execution : 
// blocking / synchro code are the codes that are executed line by line 
// non-blocking / asynchro : not guaranteed , call backs fired 

// let fs = require("fs");
// let text = fs.readFileSync("dele.txt" , "utf-8"); --> says fs.readFileSync means jab tak ye line satisfy na ho age mat badhna 

// const fs = require("fs");
// const text = fs.readFile("dele.txt" , "utf-8" );
// console.log(" this is a message !! ");
// dont get exe as it require 3rd args or call back function :

// const fs = require("fs");
// const text = fs.readFile("dele.txt" , "utf-8" , (a , b) => {
//     console.log(a , b);
// });
// console.log(" this is a message !! ");
// now the op works 
//* google fileread nodejs to look at tthe synatx where it takes args as (err , data)

const fs = require("fs");
const text = fs.readFile("dele.txt" , "utf-8" , (err , data) => {
    // console.log(err , data);
    console.log( data);
});
console.log(" this is a message !! ");

// analogy : call back will be fire only after file is read , if file take 100 years to run the next line of code need to get executed so this is a message got printed first 
// khana khane ke baad mithai de dena : asynchronous ! 
// node js works on non blocking io model 
 
