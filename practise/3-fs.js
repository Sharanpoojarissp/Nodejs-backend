//! read : 
// const fs = require('fs');
// fs.readFile('./babu.txt' , (error , data ) =>{
//     if(error){
//         console.log("there is an error : ");
//         console.log(error);
//     }

//     else { 
//         console.log(data.toString());
//     }
// } );

// console.log("terminated !! ");


//! write : 
// let content = " Nope He is lying he has not been to Amazon and He's never been to flipkart";

// const fs = require('fs');
// fs.writeFile('./babu.txt' , content , (error) => {

//     if(error){
//         console.log("there is an error " + error);
//     }

//     else{
//          console.log("saved ");
//     }
// });

//! append : 
// let content = " Why i am doing this ?? "
// const fs = require('fs');
// fs.appendFile("./babu.txt" , content , (error) =>{
//     if(error){
//         console.log("there is an error here " , + error);
//     }

//     else{ 
//         console.log("saved");
//     }
// });

//! delete : 
// const fs = require('fs');
// fs.unlink('./timepass.txt' , (error) =>{
//     if(error){ 
//         console.log("there is an error " , + error );
//     }

//     else{
//         console.log("deleted the file sucessfully ");
//     }
// });