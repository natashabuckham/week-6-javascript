const searchCandies = require('./searchCandies')

describe('searchCandies', () => {
  beforeEach(() => {
    const candies = [
      { name: 'Aero', price: 1.99 },
      { name: 'Skitties', price: 2.99 },
      { name: 'Mars', price: 1.49 },
      { name: 'Maltesers', price: 3.49 },
      { name: 'Skittles', price: 1.49 },
      { name: 'Starburst', price: 5.99 },
      { name: 'Ricola', price: 1.99 },
      { name: 'Polkagris', price: 5.99 },
      { name: 'Pastila', price: 4.99 },
      { name: 'Mentos', price: 8.99 },
      { name: 'Raffaello', price: 7.99 },
      { name: 'Gummi bears', price: 10.99 },
      { name: 'Fraise Tagada', price: 5.99 }
    ];
  })


  it('returns all candies that start with the search string', () => {
    result = searchCandies('Ma', 10)
    expect(result).toEqual(['Mars', 'Maltesers'])
  })

  it('returns all candies that are lower than the set price', () => {
    result = searchCandies('S', 4);
    expect(result).toEqual(['Skitties', 'Skittles']);
  })

  it('returns all candies that start with search string and are below price', () => {
    result = searchCandies('Ma', 2);
    expect(result).toEqual(['Mars']);
  })

  it('returns all candies that start with a one letter string', () => {
    result = searchCandies('S', 10);
    expect(result).toEqual(['Skitties', 'Skittles', 'Starburst'])
  })

})
