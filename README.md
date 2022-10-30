# Bun Benchmark with Negamax Function.

## To replicate:
  1. [Clone this repo](https://github.com/BlazingFire007/bun-benchmark-negamax).
  2. `bun install`
  3. `time node index.js`
  4. `time bun index.js`
  5. Compare results.

The relevant code comes from [my npm package](https://github.com/BlazingFire007/Exes.js/blob/main/src/engine.ts).

It uses the [negamax algorithm](https://en.wikipedia.org/wiki/Negamax) to find the best move in a tic-tac-toe game.

```ts
function negamax(board: Board, depth: number, alpha: number, beta: number): number {
  if (board.isOver || depth === 0) {
    if (board.winner === -1) return 0;
    else {
      return board.winner === board.turn ? 100 : -100;
    }
  }
  let bestScore = -Infinity;
  for (const move of board.moves) {
    board.move(move);
    const score = -negamax(board, depth - 1, -beta, -alpha);
    board.undo(move);
    bestScore = Math.max(score, bestScore);
    alpha = Math.max(alpha, score);
    if (alpha >= beta) break;
  }
  return bestScore;
}
```