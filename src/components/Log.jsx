export default function Log({ turns }) {
  return (
    <ol id='log'>
      {turns.map((turn) => (
        <li key={`${turn.square.row}/${turn.square.col}`}>
          {turn.player} selected row {turn.square.row + 1}/3, column{" "}
          {turn.square.col + 1}/3
        </li>
      ))}
    </ol>
  );
}
