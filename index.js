import { Board, search } from 'exesjs';

for (let i = 0; i < 10; i++) {
  console.time('game');
  const board = new Board({
    width: 6,
    height: 6,
    winLength: 4,
    turn: 1,
  });
  while (!board.isOver) {
    board.move(search(board, 5));
    board.move(search(board, 5));
  }
  console.timeEnd('game');
}
