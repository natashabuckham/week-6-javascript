const Pokedex = require('./pokedex')

describe('Pokedex class', () => {
    it('adds a Pokemon to the Pokedex and returns it', (done) => {
        const pokedex = new Pokedex();
        pokedex.catch('pikachu').then(() => {
            expect(pokedex.all()).toEqual([{name: 'pikachu', id: 25, height: 4, weight: 60, type: ['electric']}]);
            done();
        });
    });

    it('adds two Pokemon to the Pokedex and returns them', (done) => {
        const pokedex = new Pokedex();
        pokedex.catch('pikachu').then(() => {return pokedex.catch('jigglypuff')}).then(() => {
            expect(pokedex.all()).toEqual(
                [{name: 'pikachu', id: 25, height: 4, weight: 60, type: ['electric']},
                {name: 'jigglypuff', id: 39, height: 5, weight: 55, type: ['normal', 'fairy']}]
            )
            done();
        })
    })
});
