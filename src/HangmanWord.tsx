type HangmanWordProps = {
  guessedLetts: string[];
  wordToGuess: string;
};

export const HangmanWord = ({
  guessedLetts,
  wordToGuess,
}: HangmanWordProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((lett, i) => (
        <span style={{ borderBottom: ".1em solid black" }} key={i}>
          <span
            style={{
              visibility: guessedLetts.includes(lett) ? "visible" : "hidden",
            }}
          >
            {lett}
          </span>
        </span>
      ))}
    </div>
  );
};
