// let number = 303
// const endpoint = new URL(`https://pokeapi.co/api/v2/pokemon/${number}`);
// //console.log(endpoint);

// async () => { // with Async/Await
//      try {
//          const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
// //         // const frenchName = golduckSpecies.names.filter(pokeAPIName => pokeAPIName.language.name === 'fr')[0].name;
//          console.log(poke);
//      } catch (error) {
//          throw error;
// 		}
// 	}


// let pokeapi = fetch('https://pokeapi.co/api/v2/pokemon/clefairy/')
// 				.then(res => res.json())
// 				.then(pokemon => console.log(pokemon))
// 				console.log(pokemon.id)


// //console.log(pokeapi)
// //let pokemon = JSON.parse(pokeapi)
// //console.log(pokemon)
// //JSON.parse(api)[0].sprites/other/official-artwork/front_default :

// P.getPokemonByName(['eevee', 'ditto'])
// 	.then((response) => {
// 		console.log(response);
// 	})
// 	.catch((error) => {
// 		console.log('There was an ERROR: ', error);
// 	})

// async function nomeFuncao() {

// }



// const response = await fetch(endpoint);

// const data = await response.json();

// alert(`Country: ${data.country}\nCapital: ${data.capital || "NA"}\nInternet Code: ${data.internetcode}`);

function fetchPokemon(id) {
	fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
	.then(Response => Response.json())
	.then(pokemon => {
		console.log(pokemon);
		teste = pokemon.sprites.other.home.front_default;
		console.log(teste)});	
}


pokemon = fetchPokemon(303);
pokemon
console.log(pokemon);

//console.log(pokemon)
