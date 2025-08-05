
let outputText = document.querySelector(".output-text");

// asign unique id to each button so we can read it 
document.querySelectorAll(".button-calc, .button-special").forEach((item, index) => {
    item.id = `user-input-${index}`; // assigns it a id with a index of each button when we loop through them all
});  



// reading the buttons value and assigning it to the textbox

document.querySelectorAll(".button-calc, .button-special").forEach((item) => {
   item.addEventListener("click", () => {
     // creating the elements needed to create the box and seeing it
     let inputText = document.createElement("p");
     let ul = document.querySelector("ul");
     let li = document.createElement("li");
     
     inputText.className = "input-text";
      ul.appendChild(li);
      li.appendChild(inputText);
      inputText.innerHTML = `${item.value}`;
      
      // clearing the box
      if(item.id == "user-input-0") {
        console.log("cleared");
        ul.innerHTML = "";
        outputText.innerHTML = "";
      }


      let expression = "";
      
      if(item.value == "=" || item.textContent == "=") {
        // will loop through each letter inside of the Li and then puts it into the expression variable so its cleaner
         ul.querySelectorAll("li").forEach(characters => {
            expression = expression + characters.innerText;
         });

         expression = expression.replace("=", "");
         expression = expression.replace("x", "*"); // for the x  since we cant calculate with the letter x
         expression = expression.replace("÷", "/"); // for the divide since we it cant read it same as above
         outputText.innerHTML = eval(expression);
         

         
      } 

      ul.contentEditable = true; 
   });
});  




