import { Board, search } from 'exesjs';

const board = new Board({
  width: 7,
  height: 7,
  winLength: 4,
  turn: 1,
});

function randomMove(b) {
  const moves = b.moves;
  const move = moves[Math.floor(Math.random() * moves.length)];
  b.move(move);
}

while (!board.isOver) {
  randomMove(board);
  board.move(search(board, 5));
}
board.print();
console.log(board.winner === 1 ? 'Random won!' : 'AI won!');
