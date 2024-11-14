// #1
const recipeNameElement = document.querySelector("#recipe-name");
const recipeName = recipeNameElement.textContent;
console.log(recipeName); // Frozen Cheesecake

// #2
const recipeNameTag = recipeNameElement.tagName;
console.log(recipeNameTag); // H1

// #3
const description = document.querySelector("p.description");
const descriptionStyle = window.getComputedStyle(description);
const descriptionFontSize = descriptionStyle.fontSize;

console.log(descriptionFontSize); // 16px

// #4
const image = document.querySelector("article.image-container img");
const imageAlt = image.getAttribute("alt");
console.log(imageAlt); // Slice of Frozen Cheescake

// #5
const imageDetails = {
	url: image.getAttribute("src"),
	height: image.height,
	width: image.width,
};

console.log(imageDetails); // {url: 'assets/frozen-cheesecake-slice.jpg', height: 418, width: 575}

// #6
const pasteIngredients = document.querySelector("ul.ingredients-list-paste");
const pasteIngredientsLength = pasteIngredients.children.length;
console.log(pasteIngredientsLength); // 5

// #7
const fourthPasteIngredient = pasteIngredients.children[3].innerText;
console.log(fourthPasteIngredient); // 3dl vispgrädde

// #8
const instructions = document.querySelector("ol.instructions-list").children;
const instructionsList = [];

for (let index = 0; index < instructions.length; index++) {
	const instruction = instructions[index];

	instructionsList.push({
		order: index + 1,
		text: instruction.innerText,
	});
}

console.log(instructionsList); // [{"order":1,"text":"Smula sönder 10 stycken digistivetex och blanda sen med smöret. Bred ut det i botten av en en rund form med lösbara kanter..."}, ...]
