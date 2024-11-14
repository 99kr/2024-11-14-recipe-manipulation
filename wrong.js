// #1
const logo = document.querySelector(".logo-text");
logo.style.color = "#384241";

// #2
const header = document.querySelector("header");
header.style.justifyContent = "start";

// #3
header.style.borderBottomColor = "lightgray";

// #4
const recipeName = document.querySelector("#recipe-name");
recipeName.innerText = "Frozen Cheescake";

// #5
const timeIcon = document.querySelector(".time-container span");
timeIcon.classList.add("material-icons");

// #6
const time = document.querySelector(".time");
time.innerText = "60+ min";

// #7
const image = document.querySelector(".image-container img");
image.setAttribute("src", "assets/frozen-cheesecake-slice.jpg");

// #8
const ingredientsContainer = document.querySelector(".how-to-do .ingredients-container");
ingredientsContainer.style.backgroundColor = "#f9f9f9";

// #9
const bottomIngredients = document.querySelector(".ingredients-list-bottom");
const correctIngredients = "<li>15st digistivetex</li><li>Lite smör</li>";

bottomIngredients.innerHTML = correctIngredients;

// #10
const pasteIngredients = document.querySelector(".ingredients-list-paste");
pasteIngredients.children[2].innerText = "3tsk vaniljsocker";

// #11
pasteIngredients.insertAdjacentHTML("beforeend", "<li>400g naturell philadelphiaost</li>");

// #12
const instructionsTitle = document.querySelector(".instructions-container h3.instructions");
instructionsTitle.classList.remove("shadow");

// #13
const instructions = document.querySelector(".instructions-list");

instructions.children[1].innerText =
	"Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";
instructions.children[8].innerText = "Ställ in i frysen över natten.";
