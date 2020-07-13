// client-side js, loaded by index.html
// run by the browser each time the page is loaded

// define variables that reference elements on our page
const promptHeader = document.getElementById("prompt");

// a helper function that creates a list item for a given dream
// function appendNewDream(dream) {
//   const newListItem = document.createElement("li");
//   newListItem.innerText = dream;
//   dreamsList.appendChild(newListItem);
// }

// fetch the initial list of dreams

//let interval = 1000; //for testing
let interval = 5000; //for live

let getPrompt = () => {
  fetch("/prompts")
  .then(response => response.json()) // parse the JSON from the server
  .then(prompt => {
    //console.log(prompt);
    promptHeader.innerHTML = prompt;
    
  
    // iterate through every dream and add it to our page
    //dreams.forEach(appendNewDream);
  //appendNewDream(prompt);
  
    
  });  
}

getPrompt();

setInterval(() => {
  getPrompt();
  
}, interval);

