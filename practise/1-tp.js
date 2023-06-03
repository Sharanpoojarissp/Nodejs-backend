//! importing the addition module that i wrote ! 
const c = require('./tpmodule.js');
const avga = c(100 , 100 , 800);
console.log("the add of the three digits are : " + avga);


const http = require("http");
const addition = require("./tpmodule");
const severe = http.createServer((req , resp) =>{

    resp.writeHead(200 , "text/html");

    resp.write("<h1> This is my new server ! <h1> " );
    resp.write("<h2> Happy Coding :)  <h2> " );
    resp.write("<Button> Submit <Coding> " );

   
}).listen(9898);

