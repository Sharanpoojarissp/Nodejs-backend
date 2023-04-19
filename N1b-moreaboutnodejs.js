// console.log("this is sharan this side and now am starting my nodejs journey");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>NAVIGATION BAR </title>
      <style>
          /*Side margins removed using margin/padding 0 in body */
          body{
              margin: 0px;
              padding: 0px;
            }
                   
          .navbar{
              background-color: rgb(236, 154, 22);
              border-radius: 10px;
              /*m1: this is to stick the entire header w/o any margins from corners margin: -10px -15px;*/
              /*m2: this can remove white space from top */
              /*margin-top: -8px;*/
          }
          
          .navbar ul{
              overflow: auto;
              margin: 10px 10px;
          }
  
          .navbar li{
              float: left;
              list-style: none;
              margin: 35px 73px;
          }
  
          .navbar li a{
              text-decoration: none;
              color :rgb(0, 0, 0)
          }
  
          .navbar li a:hover{
              background-color: aqua;
          }
  
          .search{         
              float: right;
              color: blue;
              padding: 32px 26px;
          }
  
          #search{
              border-radius: 7px;
          }       
  
      </style>
  </head>
  <body>
      <header>
          <nav class="navbar">
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Continue</a> </li>
                  <div class="search"> 
                      <input type="text" name="search" id="search" placeholder="Search this website" >  
                  </div>  
              </ul>
          </nav>
      </header>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// we have sucessfully created our first backend website 

// node repl - after quting and ctrl + c and write node 

// read eval print loop 
// first read a =100 
// a mai dalega 100 
// print 34 
// again loop > 

// .exit to exit 

//  double baar tab dabane se list of modules and variables , global variables 

