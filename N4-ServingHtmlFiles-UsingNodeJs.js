const http = require("http");
const fs = require("fs");

const fileContentReadkarnaHai = fs.readFileSync('L61.html')

// create a server : 

const server = http.createServer((req , res) => {
    res.writeHead(200 , {'Content-type':'text/html'});
    res.end(fileContentReadkarnaHai)
})

server.listen(80 , '127.0.0.1' , () => {
    console.log("listening on port 80")
})

// require is just like impoting something
// https and fs modules imported here 
// read the file (html file present )
// server creation and call backs 
// server listen where we pass thing and run that on local host !!