

const express = require('express');
const app = express();

app.get("/",(req,res)=>{
  let htmlString ="<h1>Hello</h1>";
  res.send(htmlString);
  // res.sendFile(path,join("C:\Users\HP LAP\OneDrive\Desktop\DentedCode\Node class>" , "/file.json"));
})


app.listen(3000,()=>{

});

// app.listen(3000,(error)=>{
//   if(error){
//     console.log("error occured",error );
//   }
//   else{
//     console.log("is good");
//   }
// });