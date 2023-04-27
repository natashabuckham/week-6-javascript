const fetchPokemon = require('./api')

describe('fetchPokemon function', () => {
    it('returns a promise of the pokemon data', (done) => {
        fetchPokemon('gengar').then((pokemon) => {
            expect(pokemon.name).toEqual('gengar');
            expect(pokemon.id).toEqual(94);
            expect(pokemon.height).toEqual(15);
            expect(pokemon.weight).toEqual(405);
            expect(pokemon.type).toEqual(['ghost', 'poison']);
            done();
        });
    });
});
