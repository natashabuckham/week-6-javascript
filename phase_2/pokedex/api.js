const fetchPokemon = (pokemonName) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    return fetch(url)
    .then((response) => response.json())
}

module.exports = fetchPokemon
