// client-side js, loaded by index.html
// run by the browser each time the page is loaded

// define variables that reference elements on our page
const promptsList = document.getElementById("prompts");

// a helper function that creates a list item for a given dream
function appendNewPrompt(prompt) {
  const newListItem = document.createElement("li");
  newListItem.innerText = prompt;
  promptsList.appendChild(newListItem);
}

// fetch the initial list of dreams

let getPrompts = () => {
  fetch("/allPrompts")
  .then(response => response.json()) // parse the JSON from the server
  .then(prompts => {
    //console.log(prompt);
    
    
  
    // iterate through every dream and add it to our page
    prompts.forEach(appendNewPrompt);
  //appendNewDream(prompt);
  
    
  });  
}

getPrompts();
