async function pokename(id) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
	const data = await response.json();
	//displayName(data.name.toUpperCase());
	console.log(data.name.toUpperCase());
	document.getElementById("pokename").innerHTML = data.name;
	document.getElementById("picture").alt = data.name;
}

async function pokedex(id) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
	const data = await response.json();

	let i = 0;
	while (data.flavor_text_entries[i].language.name !== 'en'){
		i = Math.floor(Math.random() * data.flavor_text_entries.length);
	}
	displayPokedex(data.flavor_text_entries[i].flavor_text.replaceAll(/\f/g, " "));
	document.getElementById("version").innerHTML = "Pokémon " + data.flavor_text_entries[i].version.name;
}

async function pokeartwork(id) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
	const data = await response.json();
	// displayPokemon(data.sprites.other['official-artwork']['front_default']);
	document.getElementById("picture").src = data.sprites.other['official-artwork']['front_default'];
}

async function imgTitle(id) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
	const data = await response.json();

	let i = 0;
	while (data.genera[i].language.name !== 'en'){
		i++;
	}
	document.getElementById("picture").title = data.genera[i].genus;
}


async function obj(id) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
	const data = await response.json();
	console.log(data);
}

function displayPokedex(nome) {
	document.getElementById("entry").innerHTML = nome.replaceAll("POKéMON", "Pokémon");

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

let after = '25';
let before = [];

document.addEventListener("keydown", function(event){
	if (event.key === 'ArrowRight') {
		next();
	}
	else if (event.key === 'ArrowLeft') {
		previous();
	}
})

pokeartwork(after);
pokedex(after);
pokename(after);
obj(after);
imgTitle(after);

//efeito transição
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
