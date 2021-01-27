var choice = 'O';
var count = 0;
var winner = 'tie';
var table = document.getElementById('myTable');
var content = table.innerHTML;

const array = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function myFunction() {
  var id = event.target.id;
  choice = choice === 'O' ? 'X' : 'O';
  document.getElementById(id).innerHTML = choice;
  calculateWinner(Number(id), choice);
}


function calculateWinner(cell, decision) {
  for (var i = 0; i < array.length ; i++) {
    for (var j = 0; j < array[i].length; j++) {
      if (cell === array[i][j]) {
        array[i][j] = decision;
      }
    }
  }
  declareWinner();
}

function declareWinner() {
  var div = document.getElementById('winner');
  for (var i = 0; i < array.length ; i++) {
    count++;
    const [a, b, c] = array[i];
    if (a === b && a === c) {
      count++;
      div.innerHTML = 'Winner is Player:' + a;
    }
  }
  if (count === 72) {
    div.innerHTML = 'Game is a tie'
  }
}

function reload() {
  table.innerHTML = content;
  var result = document.getElementById('winner');
  result.innerHTML = '';
}