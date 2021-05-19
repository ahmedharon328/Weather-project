// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");


const app = express();
 
// Start up an instance of app
const bodyParser = require("body-parser");


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;

/* Spin up the server*/
const server = app.listen(port, ()=>{
  console.log(`running on localhost:${port}`)
})



// Get info
app.get("/presentData",(req,res)=>{
  res.send(projectData);
});

// POST ROUTE
app.post("/info",(req,res)=>{
  console.log(req.body)
      projectData= req.body
})

