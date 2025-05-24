import SearchInput from "./classes/SearchInput.js";
import Button from "./classes/Button.js";
import Pokemon from "./classes/Pokemon.js";

const searchInput = new SearchInput(document.getElementById("search"));

new Button(document.getElementById("submit"), () =>{
    console.log(searchInput.value)
});

new Button(document.getElementById("szamol"), () =>{
    console.log("Kiszámol: ", 2 + 2)
});

new Button(document.getElementById("submit"), () =>{
    console.log(Pokemon.img)
});