const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
var  inputString = "";
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	const lowerStr = str.toLowerCase();
	results = fruit.filter((val) => val.toLowerCase().includes(lowerStr));

	return results;
}

function searchHandler(e) {
	
	const inputChar = e.key;
	console.log(e.keyCode);
	//letters
	if (e.which <= 90 && e.which >= 65){
		inputString = inputString + inputChar;
		console.log(inputString);
		
	}else if (e.which === 8){
		//press the delete key
		inputString = inputString.slice(0, -1);
		console.log(inputString);
		if (inputString.length === 0){
			return;
		}
	}

	const results = search(inputString);
	console.log(results);
	showSuggestions(results, inputString);
}

function showSuggestions(results, inputVal) {

	let suggestedList = document.querySelector(".suggestions ul");
	//empty list from last input
	suggestedList.innerHTML = "";

	results.forEach((val) => {
		let fruitLi = document.createElement("li");
		fruitLi.textContent = val;
		suggestedList.append(fruitLi);
	});
	
	suggestedList.classList.add("has-suggestions");
}

function useSuggestion(e) {
	let fruitWanted = e.target.textContent;
	//const bar = document.getElementById("fruit");
	//bar.placeholder = fruitWanted;
	input.value = fruitWanted; //use .value, NOT .innerHTML
	let suggestedList = document.querySelector(".suggestions ul");
	suggestedList.innerHTML = "";
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);