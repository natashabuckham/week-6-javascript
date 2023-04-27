const fetchPokemon = require('./api')

describe('fetchPokemon', () => {
    it('returns a promise of the pokemon data', (done) => {
        fetchPokemon('gengar').then((pokemon) => {
            expect(pokemon.name).toEqual('gengar');
            done();
        });
    });
});
