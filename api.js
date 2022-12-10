let number = 303
let pokemon
fetch('https://pokeapi.co/api/v2/pokemon/'+number)
	.then(res => res.json())
	.then(pokemon => console.log(pokemon))
	// console.log(pokemon)

// console.log(pokemon)
//JSON.parse(api)[0].sprites/other/official-artwork/front_default :