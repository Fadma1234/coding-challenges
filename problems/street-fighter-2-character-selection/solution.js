function streetFighterSelection(fighters, position, moves) {
  const result = [];
  const height = fighters.length;
  const width = fighters[0].length;
  let row = position[0];
  let col = position[1];

  for (const move of moves) {
    if (move === 'up') {
      if (row > 0) row -= 1;
    } else if (move === 'down') {
      if (row < height - 1) row += 1;
    } else if (move === 'left') {
      col = (col - 1 + width) % width;
    } else if (move === 'right') {
      col = (col + 1) % width;
    }

    result.push(fighters[row][col]);
  }

  return result;
}

module.exports = { streetFighterSelection };