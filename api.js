async function pokename() {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/303/`);
	const data = await response.json()
	return data;
}
console.log(pokename());
let id = Math.floor(Math.random() * 152);

// function pokename() {
// 	fetch(`https://pokeapi.co/api/v2/pokemon/303/`)
// 	.then((response) => response.json())
// 	.then((data) => {
// 		return(data.name.toUpperCase());
// 	})

// }

function pokedex() {
	fetch(`https://pokeapi.co/api/v2/pokemon-species/303/`)
	.then((response) => response.json())
	.then((data) => {
		console.log(data['flavor_text_entries'][0]['flavor_text']);
	})

}
//console.log(pokedex());

// function next() {
// 	
// 	document.getElementById("picture").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
// 	pokename(id);
// 	document.getElementById("name").innerHTML = pokename.text;


// }

// let picture = document.getElementById("picture").src;
// picture = "teste";
// console.log (picture);

//document.getElementById("pokename").innerHTML = pokename();
//document.getElementById("pokedex").innerHTML = pokedex();

