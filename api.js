async function pokename(id) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
	const data = await response.json();
	displayName(data.name.toUpperCase());
}

async function pokedex() {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
	const data = await response.json();
	displayPokedex(data['flavor_text_entries'][language.name === 'en']['flavor_text']); 
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

let id = "78"; //Math.floor(Math.random() * 152);

// function pokename() {
// 	fetch(`https://pokeapi.co/api/v2/pokemon/303/`)
// 	.then((response) => response.json())
// 	.then((data) => {
// 		return data.name;
// 	})
// }

pokedex(id);
pokename(id);
obj();

// function next() {
// 	
// 	document.getElementById("picture").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
// 	pokename(id);
// 	document.getElementById("name").innerHTML = pokename.text;
// }



