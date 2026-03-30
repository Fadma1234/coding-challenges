# Street Fighter 2 Character Selection

## Problem Statement

Simulate the video game character selection screen behavior for a 2x6 grid.

You are given:
- a list of game characters in a 2x6 grid,
- the initial position of the selection cursor (`top-left` is `(0,0)`),
- a list of moves of the selection cursor (`up`, `down`, `left`, `right`).

Return the list of characters hovered by the selection cursor after each move. Include characters after unsuccessful moves too.

### Rules

- The cursor wraps horizontally.
  - `left` from the leftmost column moves to the rightmost column.
  - `right` from the rightmost column moves to the leftmost column.
- The cursor does not wrap vertically.
  - `up` from the top row stays in the top row.
  - `down` from the bottom row stays in the bottom row.

### Example

Input:
```js
const fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];
const initialPosition = [0, 0];
const moves = ["up", "left", "right", "left", "left"];
```

Output:
```js
["Ryu", "Vega", "Ryu", "Vega", "Balrog"]
```

## Difficulty
Easy

## Topics
- Arrays
- Simulation
- Control flow
