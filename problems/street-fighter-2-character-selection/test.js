const { streetFighterSelection } = require('./solution');

describe('Street Fighter 2 Character Selection', () => {
  const fighters = [
    ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
    ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison']
  ];

  test('example 1', () => {
    const moves = ['up', 'left', 'right', 'left', 'left'];
    const result = streetFighterSelection(fighters, [0, 0], moves);
    expect(result).toEqual(['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']);
  });

  test('example 2', () => {
    const moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right'];
    const result = streetFighterSelection(fighters, [0, 0], moves);
    expect(result).toEqual(['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']);
  });

  test('stays within vertical bounds', () => {
    const moves = ['up', 'up', 'down', 'down', 'down'];
    const result = streetFighterSelection(fighters, [0, 2], moves);
    expect(result).toEqual(['Blanka', 'Blanka', 'Zangief', 'Zangief', 'Zangief']);
  });
});