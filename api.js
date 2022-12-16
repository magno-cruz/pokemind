// async function pokename() {
// 	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/303/`);
// 	const data = await data.json()
// 	return pokemon.name;
// }


async function pokename() {
	fetch(`https://pokeapi.co/api/v2/pokemon/303/`)
	.then((response) => response.json())
	.then((data) => {
		console.log(data.name);
	})
}

console.log(await pokename());

//console.log(fetchPokemon(303));
//poke = fetchPokemon(303);
//console.log(typeof poke);

// function next() {
// 	let id = Math.floor(Math.random() * 152);
// 	document.getElementById("picture").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
// 	pokename(id);
// 	document.getElementById("name").innerHTML = pokename.text;


// }

// let picture = document.getElementById("picture").src;
// picture = "teste";
// console.log (picture);


