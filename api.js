function fetchPokemon(id) {
	fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
	.then(Response => Response.json())
	.then(pokemon => {
		teste = pokemon.sprites.front_default;
	console.log(pokemon);
})}


fetchPokemon(303)
//pokemon = fetchPokemon(303);

function funcaoteste() {
	let id = Math.floor(Math.random() * 152);

	let next = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

	document.getElementById("picture").src = next;
}

// let picture = document.getElementById("picture").src;
// picture = "teste";
// console.log (picture);


