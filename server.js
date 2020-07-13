// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const fs = require('fs');
const app = express();



const prompts = fs.readFileSync('prompts.txt', 'utf8').split('\n');

// our default array of dreams
// const prompts = [
//   "Find and count some sheep",
//   "Climb a really tall mountain",
//   "Wash the dishes",
//   "This is a new thing"
// ];

let index = Math.floor(Math.random()*prompts.length);
//let interval = 1000; // for testing
let interval = 60000; //for live


setInterval(() => {
  index = Math.floor(Math.random()*prompts.length);
}, interval);

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/prompts.html", (request, response) => {
  response.sendFile(__dirname + "/views/prompts.html");
});

// send the default array of dreams to the webpage
app.get("/prompts", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(prompts[index]);
});

app.get("/allPrompts", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(prompts);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
