const fetchPokemon = require('./api')



// fetchPokemon('bulbasaur')
// fetchPokemon('charizard')

class Pokedex {
    constructor() {
        this.pokemon = [];
    }

    catch(pokemonName) {
        return fetchPokemon(pokemonName)
        .then((data) => {
            const pokemon = {
                name: data.name,
                id: data.id,
                height: data.height,
                weight: data.weight,
                type: data.types.map((outerType) => outerType.type.name)
            }
        this.pokemon.push(pokemon);
        })
    }

    all() {
        return this.pokemon;
    }
}

// in the node REPL

// const pokedex  = new Pokedex();
// pokedex.catch('pikachu').then(() => {console.log(pokedex.all())})


// pokedex.catch('jigglypuff').then(() => {console.log(pokedex.all())})
 // Adds jigglypuff to the pokedex
// then, after some time has passed...
 // returns an array of the pokemon in the pokedex

module.exports = Pokedex
