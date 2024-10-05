// import express from "express";

// import path from "path";
// import fs from "fs";
// import {home,login,register} from "./home.js";

// const app = express();
// const PORT = 3000;
// const __dirname = path.resolve();

// app.use("/public", express.static(path.join(__dirname, "static")));
// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   let htmlString = "<h1>HOME PAGE</h1>";
//   // response.send(htmlString);

//   res.sendFile(path.join(__dirname, "/file.json"));
// });

// // app.get("/", (req,res) => {
// //   let htmlString = "<h1>HOME PAGE</h1>";
// //   res.sendFile(path.join(__dirname, "/file.json"));
// // });

// app.get("/home",(req,res)=>{
//   let htmlString = home();
//   res.send(htmlString);
// });

// app.get("/login",(req,res)=>{
//   let htmlString = login();
//   console.log("LOGIN QUERY:", req.query);
//   res.send(htmlString);
// });

// app.get("/register", (req, res) => {
//   let htmlString = register();
//   res.send(htmlString);
// });


// app.post("/register", (request, response) => {
//   let { email, name, password } = request.body;
//   console.log(email, name, password);
//   // saving data to database
//   const userObj = {
//     ...request.body,
//   };

//   fs.writeFile("./data/data.json", JSON.stringify(userObj), (error) => {
//     if (error) {
//       response.send("ERROR WRITING FILE");
//     } else {
//       response.send(home(name));
//     }
//   });
// });

// app.post("/login", (req, res) => {
//   let { email, password } = request.body;

//   fs.readFile("./data/data.json", (error, data) => {
//     if (error) {
//       res.send("ERROR READING");
//     } else {
//       const dataJson = JSON.parse(data);
//       if (email == dataJson.email && password == dataJson.password) {
//         res.send(home(dataJson.name));
//       } else {
//         res.send(login());
//       }
//     }
//   });
// });

// // app.listen(3000,()=>{

// // });

// app.get("/user", (res,req) =>{
//   res.send("hell0");
// });

// app.delete("/user", (req, res)=>{
//   try{
//     res.status(200)
//   }
// catch(error){
//   res.status(500).send(Error in server);
// }
// });

// app.listen(PORT, (error) => {
//   error
//     ? console.log("ERROR in serving")
//     : console.log("http://localhost:" + PORT + " started");
// });



import express from "express";
import path from "path";
import fs from "fs";

import { home } from "./src/home.js";

import { randomIdGenerator } from "./src/helper/helper.js";

import cors from "cors";

const app = express();
const PORT = 3000;
const __dirname = path.resolve();
const TASK_DATA = "./data/tasks.json";

const myLogger = (req, res, next) => {
  console.log(req.body);
  next();
};

const authenticateMiddlware = (req, res, next) => {
  const { email, password } = req.body;

  if (email == "test@gmail.com") {
    next();
  } else {
    res.send(401, "UNAUTHORIZED");
  }
};

app.use("/public", express.static(path.join(__dirname, "static")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// app.use(myLogger);
// app.use(authenticateMiddlware);

app.get("/", (request, response) => {
  let htmlString = "<h1>HOME PAGE</h1>";

  response.sendFile(path.join(__dirname, "/src/file.json"));
});

app.get("/home", (request, response) => {
  let htmlString = home();
  response.send(htmlString);
});

app.get("/register", (request, response) => {
  response.sendFile(path.join(__dirname, "/static/register.html"));
});

app.post("/register", (request, response) => {
  let { email, name, password } = request.body;
  console.log(email, name, password);
  // saving data to database
  const userObj = {
    ...request.body,
  };

  fs.writeFile("./data/data.json", JSON.stringify(userObj), (error) => {
    if (error) {
      response.send("ERROR WRITING FILE");
    } else {
      response.send(home(name));
    }
  });
});

app.get("/login", (request, response) => {
  console.log("LOGIN QUERY:", request.query);
  response.sendFile(path.join(__dirname, "/static/login.html"));
});

app.post("/login", (request, response) => {
  console.log(request.body);
  let { email, password } = request.body;

  fs.readFile("./data/data.json", (error, data) => {
    if (error) {
      response.send("ERROR READING");
    } else {
      const dataJson = JSON.parse(data);
      if (email == dataJson.email && password == dataJson.password) {
        response.send(home(dataJson.name));
      } else {
        response
          .status(401)
          .sendFile(path.join(__dirname, "/static/login.html"));
      }
    }
  });
});

// app.get("/order", (request, response) => {
//   console.log("Order PATH");
//   console.log(request.query.orderid);

//   let orderData = {
//     name: "order1",
//     address: "Townhall",
//   };

//   response.send(`${orderData.name}`);
// });

// app.get("/addNumber", (request, response) => {
//   try {
//     let number1 = parseInt(request.query.number1);
//     let number2 = parseInt(request.query.number2);
//     response.send(`${number1 + number2}`);
//   } catch (err) {
//     console.log(err.message);
//     response.send(err.message);
//   }
// });

// app.get("/user/getOrderList", (request, response) => {
//   // get list of orders from DatabaseSync
//   // return the list
// });

const basePath = "/api/v1";

app.get(basePath + "/user", (req, res) => {
  const { email, password } = req.query;

  try {
    const successObject = {
      status: "success",
      message: "User Retrieved Successfully!",
      data: {
        email: email,
        password: password,
      },
    };

    res.status(200).send(successObject);
  } catch (error) {
    const errorObj = {
      status: "error",
      message: "Error retrieving users!",
    };
    res.status(500).send(errorObj);
  }
});

app.get(basePath + "/user/:userid", (req, res) => {
  let userid = req.params.userid;

  console.log(100, userid);

  try {
    res.status(200).send("GET USER REQUEST" + `${userid}`);
  } catch (error) {
    res.status(500).send("ERROR IN SERVER");
  }
});

app.post(basePath + "/user", (req, res) => {
  const { email, password } = req.body;

  try {
    res.status(200).send(`${email} ===== ${password}`);
  } catch (error) {
    res.status(500).send("ERROR IN SERVER");
  }
});

app.put(basePath + "/user", (req, res) => {
  try {
    res.status(200).send("PUT REQUEST");
  } catch (error) {
    res.status(500).send("ERROR IN SERVER");
  }
});

app.patch(basePath + "/user", (req, res) => {
  try {
    res.status(200).send("PATCH REQUEST");
  } catch (error) {
    res.status(500).send("ERROR IN SERVER");
  }
});

app.delete(basePath + "/user", (req, res) => {
  try {
    res.status(200).send("DELETE REQUEST");
  } catch (error) {
    res.status(500).send("ERROR IN SERVER");
  }
});

// NOT TO LIST API
app.get("/ntdl/tasks", (req, res) => {
  // fetch task from database
  fs.readFile(TASK_DATA, (error, data) => {
    if (error) {
      const errorObj = {
        status: "error",
        message: "Error retreiving tasks",
      };

      console.log(error);

      res.status(500).send(errorObj);
    } else {
      const successObj = {
        status: "success",
        message: "Task List fetched!",
        data: JSON.parse(data),
      };

      res.status(200).send(successObj);
    }
  });
});

app.get("/ntdl/tasks/:id", (req, res) => {
  const id = req.params.id;

  fs.readFile(TASK_DATA, (error, data) => {
    if (error) {
      const errorObj = {
        status: "error",
        message: "Error retreiving tasks",
      };

      console.log(error);
      res.status(500).send(errorObj);
    } else {
      //filter task by id
      const TASK_DATA = JSON.parse(data).find((task) => task.id == id);

      if (TASK_DATA) {
        const successObj = {
          status: "success",
          message: "Task List fetched!",
          data: TASK_DATA,
        };

        res.status(200).send(successObj);
      } else {
        const errorObj = {
          status: "error",
          message: "No Task Found!",
        };

        res.status(500).send(errorObj);
      }
    }
  });
});

app.post("/ntdl/tasks", (req, res) => {
  try {
    const { task, hour, type } = req.body;

    const data = fs.readFileSync(TASK_DATA);

    const taskList = JSON.parse(data);
    taskList.push({
      id: randomIdGenerator(),
      task,
      hour,
      type,
    });

    const output = fs.writeFileSync(TASK_DATA, JSON.stringify(taskList));

    const successObj = {
      status: "success",
      message: "Task createdd successfully!",
      data: {
        task,
        type,
        hour,
      },
    };

    res.status(200).send(successObj);
  } catch (error) {
    const errorObj = {
      status: "error",
      message: "Error creating new task",
    };

    res.status(500).send(errorObj);
  }
});

app.put("/ntdl/tasks/:id", (req, res) => {
  const id = req.params.id;
  const { task, hour, type } = req.body;
  //fetch all task

  if (task && hour && type) {
    const data = fs.readFileSync(TASK_DATA);
    const taskList = JSON.parse(data);

    //find the task by id
    let updatedTaskList = taskList.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          task,
          type,
          hour,
        };
      } else {
        return item;
      }
    });

    // update in database
    const output = fs.writeFileSync(TASK_DATA, JSON.stringify(updatedTaskList));

    const successObj = {
      status: "success",
      message: "Task update successfully!",
      data: {
        id,
        task,
        hour,
        type,
      },
    };

    res.status(200).send(successObj);
  } else {
    let errorObj = {
      status: "error",
      message: "Cannot PUT update",
    };

    res.status(400).send(errorObj);
  }
});

app.patch("/ntdl/tasks/:id", (req, res) => {
  const id = req.params.id;
  const { task, hour, type } = req.body;
  //fetch all task
  const data = fs.readFileSync(TASK_DATA);
  const taskList = JSON.parse(data);

  //find the task by id
  let updatedTaskList = taskList.map((item) => {
    if (item.id == id) {
      return {
        ...item,
        task: task ?? item.task,
        type: type ?? item.type,
        hour: hour ?? item.hour,
      };
    } else {
      return item;
    }
  });

  // update in database
  const output = fs.writeFileSync(TASK_DATA, JSON.stringify(updatedTaskList));

  const successObj = {
    status: "success",
    message: "Task update successfully!",
    data: {
      id,
      task,
      hour,
      type,
    },
  };

  res.status(200).send(successObj);
});

app.delete("/ntdl/tasks/:id", (req, res) => {
  try {
    const id = req.params.id;

    const data = fs.readFileSync(TASK_DATA);
    const taskList = JSON.parse(data);
    const filterTaskList = taskList.filter((task) => task.id != id);
    const output = fs.writeFileSync(TASK_DATA, JSON.stringify(filterTaskList));

    const successObj = {
      status: "success",
      message: "Task " + id + "deleted!",
    };

    res.status(200).send(successObj);
  } catch (error) {
    const errorObj = {
      status: "error",
      message: "Error deleting task",
    };

    res.status(500).send(errorObj);
  }
});

app.get("/quiz", (req, res) => {
  res.sendFile(__dirname + "/data/quiz.json");
});

app.listen(PORT, (error) => {
  error
    ? console.log("ERROR in serving")
    : console.log("http://localhost:" + PORT + " started");
});