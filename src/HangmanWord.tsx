type HangmanWordProps = {
  guessedLetts: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export const HangmanWord = ({
  guessedLetts,
  reveal = false,
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
              visibility:
                guessedLetts.includes(lett) || reveal ? "visible" : "hidden",
              color: !guessedLetts.includes(lett) && reveal ? "red" : "black",
            }}
          >
            {lett}
          </span>
        </span>
      ))}
    </div>
  );
};
