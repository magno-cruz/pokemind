async function pokename(id) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
	const data = await response.json();
	displayName(data.name.toUpperCase());
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

let id = '25';
let previous = '303';
// pokeartwork(id);
// pokedex(id);
// pokename(id);
// obj(id);

function next() {
	id = Math.floor(Math.random() * 152);
	pokeartwork(id);
	pokedex(id);
	pokename(id);
	obj(id);
	//previous.push(id);
}

function before() {
	pokeartwork(previous);
	pokedex(previous);
	pokename(previous);
	obj(previous);
}

