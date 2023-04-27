const fetchPokemon = require('./api')

fetchPokemon('gengar').then((response) => {console.log(response)})

// fetchPokemon('bulbasaur')
// fetchPokemon('charizard')
