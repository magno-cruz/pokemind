async function pokename(id) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
	const data = await response.json();
	displayName(data.name.toUpperCase());
	console.log(data.name.toUpperCase());
}

async function pokedex(id) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
	const data = await response.json();

	let i = 0;
	while (data.flavor_text_entries[i].language.name !== 'en'){
		i = Math.floor(Math.random() * 95);
	}
	displayPokedex(data.flavor_text_entries[i].flavor_text); 
}

async function pokeartwork(id) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
	const data = await response.json();
	displayPokemon(data.sprites.other['official-artwork']['front_default']);
}

async function imgTitle(id) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
	const data = await response.json();

	let i = 0;
	while (data.genera[i].language.name !== 'en'){
		i++;
	}
	displayImgTitle(data.genera[i].genus);
}


async function obj(id) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
	const data = await response.json();
	console.log(data);
}

function displayName(nome) {
	document.getElementById("pokename").innerHTML = nome;
	document.getElementById("picture").alt = nome;
}

function displayPokedex(nome) {
	document.getElementById("pokedex").innerHTML = nome;

}

function displayPokemon(nome) {
	document.getElementById("picture").src = nome;

}

function displayImgTitle(nome) {
	document.getElementById("picture").title = nome;
}

function next() {
	after = Math.floor(Math.random() * 152);
	pokeartwork(after);
	pokedex(after);
	pokename(after);
	obj(after);
	imgTitle(after);
	before.push(after);
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