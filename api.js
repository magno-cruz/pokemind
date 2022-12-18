async function pokename(id) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
	const data = await response.json();
	displayName(data.name.toUpperCase());
}

async function pokedex() {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
	const data = await response.json();
	// for(let i = 0; i < data.flavor_text_entries.length; i++) {
	// 	if(data.flavor_text_entries[i].language.name === 'en') {
	// 	return (data.flavor_text_entries[i].flavor_text)
	// 	}
	// }

	let i = 0;
	while (data.flavor_text_entries[i].language.name !== 'en'){
		i = Math.floor(Math.random() * 95);
	}
	displayPokedex(data.flavor_text_entries[i].flavor_text); 
}

async function pokeartwork() {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
	const data = await response.json();
	displayPokemon(data.sprites.other['official-artwork']['front_default']);
}


async function obj() {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
	const data = await response.json();
	console.log(data);
}

function displayName(nome) {
	document.getElementById("pokename").innerHTML = nome;
}

function displayPokedex(nome) {
	document.getElementById("pokedex").innerHTML = nome;
}

function displayPokemon(nome) {
	document.getElementById("picture").src = nome;
}

let id = "78"; //Math.floor(Math.random() * 152);

pokeartwork(id);
pokedex(id);
pokename(id);
obj();




