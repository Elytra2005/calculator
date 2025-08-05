let background = document.querySelector(".section2");
let input_group = document.querySelector(".buttons");
let button_special = document.querySelectorAll(".button-special");
let switch_button = document.querySelector(".switch");
let switch_bg_section = document.querySelector(".section1");
let display_panel = document.querySelector(".output");
let state = false; // default is dark mode so this should be false first


switch_button.addEventListener("click", () => {
   state = !state;  // state is the oposite of what the current is!
   if(state == true) {
      lightMode();
   } else {
      darkMode();
   }

   console.log(`The current state is ${state}`);
});

function lightMode() {
    // background stuff
    background.classList.remove("dark");
    background.classList.add("light");

    // calcuator stuff
    button_special.forEach((special) => {
         special.classList.remove("button-special-bg");
         special.classList.add("button-special-2");  
    });

    input_group.classList.remove("input-background");
    input_group.classList.add("input-background-2");

    display_panel.classList.remove("display-panel");
    display_panel.classList.add("display-panel-new");

    switch_bg_section.classList.remove("dark");
    switch_bg_section.classList.add("light");
}


function darkMode() {
    // background stuff
    background.classList.remove("light");
    background.classList.add("dark");


    // calcuator stuff
    button_special.forEach((special) => {
         special.classList.remove("button-special-2");
         special.classList.add("button-special-bg");  
    });

    input_group.classList.remove("input-background-2");  
    input_group.classList.add("input-background");

    display_panel.classList.remove("display-panel-new"); 
    display_panel.classList.add("display-panel");

    switch_bg_section.classList.remove("light");
    switch_bg_section.classList.add("dark");
    
}