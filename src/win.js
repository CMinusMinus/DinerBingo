
export function checkWinAcross(grid, col) {
  return grid[col].filter(item => (
    item.isWon
  )).length >= 5;
}

export function checkWinDown(grid, ro) {
  return grid.filter((row, y) => (
    row.filter((tile, x) => (
      (tile.isWon) && x === ro
    )).length > 0  
  )).length >= 5;
}

function checkWinDiagonalDown(grid) {
  return grid.filter((row, y) => (
    row.filter((tile, x) => (
      (tile.isWon) && (x === y)
    )).length > 0
  )).length >= 5;
}

export function checkWinDiagonalUp(grid) {
  return grid.filter((row, y) => (
    row.filter((tile, x) => (
      tile.isWon && (x+y === 4)
    )).length > 0  
  )).length >= 5;
}

