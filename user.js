
// import express from "express"; // CommonJS syntax
// const app = express();

// app.get("/user", (req, res) => {
//     res.send("hello");
// });

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });



// app.get("/ndt1/tasks",(req,res)=>{
//     // fetch data
    

// })

import FileSystem from "FileSystem";
app.use(express.static('public')); // Adjust the folder name as necessary

app.get("/tasks",(req,res)=>{
    FileSystem.readFile(TASK_DATA, (error,data)=>{
        if(error){
            const errorObj ={
                status:"error",
                message:"Error fetching Tasks",
            };
            console.log(error);
            res.status(500).send(errorObj);
        }else{
            const successObj={
                status:"success",
                message:"Task List fetched!",
                data: JSON.parse(data),
            };
            res.status(200).send(successObj);
            };
    })
})




    
    