fetch('https://pokeapi.co/api/v2')
	.then(res => res.json())
	.then(data => console.log(data))