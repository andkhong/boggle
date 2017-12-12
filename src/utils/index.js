export function rollDices (list) {
    let mappedGrid = list.map(item => (
      {
        selected: false,
        letter: item[Math.floor(Math.random() * item.length)]
      }
    ));
    return shuffleArray(mappedGrid);
}

export function shuffleArray(array){
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    while (currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return buildGrid(array, 5);
}

export function buildGrid(array, n){
  let grid = [];
  let row = [];
  for(let i = 0; i < array.length; i++){
    row.push(array[i]);
    if(row.length === n) {
      grid.push(row);
      row = [];
    }
  }
  return grid;
}
  
export function isTraversable(array, history, index){
  let row = index[0];
  let col = index[1];
  let prevRow = history[history.length - 1][0];
  let prevCol = history[history.length - 1][1];
  let left = (col + 1 === prevCol) && row === prevRow;
  let right = (col - 1 === prevCol) && row === prevRow;
  let up = (row - 1 === prevRow) && col === prevCol;
  let down = (row + 1 === prevRow) && col === prevCol;
  return left || right || up || down;
}
