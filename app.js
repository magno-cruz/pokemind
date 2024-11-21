async function pokename(id) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
	const data = await response.json();
	//displayName(data.name.toUpperCase());
	console.log(data.name.toUpperCase());
	document.getElementById("pokename").innerHTML = data.name;
	document.getElementById("picture").alt = data.name;
	document.getElementById("option1").innerHTML = data.name;
}

async function pokedex(id) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
	const data = await response.json();

	let i = 1;
	while (data.flavor_text_entries[i].language.name !== 'en'){
		i = Math.floor(Math.random() * data.flavor_text_entries.length);
	}
	displayPokedex(data.flavor_text_entries[i].flavor_text.replaceAll(/\f/g, " "));
	document.getElementById("version").innerHTML = "Pokémon " + data.flavor_text_entries[i].version.name;
}

async function pokeartwork(id) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
	const data = await response.json();
	// displayPokemon(data.sprites.other['official-artwork']['front_default']);
	document.getElementById("picture").src = data.sprites.other['official-artwork']['front_default'];
}

async function imgTitle(id) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
	const data = await response.json();

	let i = 0;
	while (data.genera[i].language.name !== 'en'){
		i++;
	}
	document.getElementById("picture").title = data.genera[i].genus;
}


async function obj(id) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
	const data = await response.json();
	console.log(data);
}

function displayPokedex(nome) {
	document.getElementById("entry").innerHTML = nome.replaceAll("POKéMON", "Pokémon");

}

function next() {
	after = Math.floor(Math.random() * 152);
	pokeartwork(after);
	pokedex(after);
	pokename(after);
	obj(after);
	imgTitle(after);
	before.push(after);
	document.getElementById("options").style.display = "flex";
	document.getElementById("pokedex").style.display = "none";
	document.getElementById("pokename").style.visibility = "hidden";

}

function previous() {
	pokeartwork(before[before.length-2]);
	pokedex(before[before.length-2]);
	pokename(before[before.length-2]);
	// obj(before[before.length-2]);
	imgTitle(before[before.length-2]);
	if (before.length > 2) {
		before.pop();
	}
}

function options(number) {
	console.log(number)
	if ((document.getElementById(`option${number}`).innerHTML) == (document.getElementById("pokename").innerHTML)) {
		document.getElementById("options").style.display = "none";
		document.getElementById("pokedex").style.display = "flex";
		document.getElementById("pokename").style.visibility = "visible";
		document.getElementById("pokename").innerHTML = document.getElementById("pokename").innerHTML

	} else {
		document.getElementById("pokename").style.visibility = "visible";
		document.getElementById("pokename").innerHTML = "Tente de novo";

	}


	//console.log(number)
}

let after = '25';
let before = [];

document.addEventListener("keydown", function(event){
	if (event.key === 'ArrowRight') {
		next();
	}
	else if (event.key === 'ArrowLeft') {
		previous();
	}
})

pokeartwork(after);
pokedex(after);
pokename(after);
obj(after);
imgTitle(after);






listOfOptions = ["option1", "option2", "option3", "option4"]
function random() {
	Math.floor(Math.random() * 4)
	newList = []

}

