export const HangmanWord = () => {
  const word = "TEST";
  const guessedLett = ["E"];
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
      {word.split("").map((lett, i) => (
        <span style={{ borderBottom: ".1em solid black" }} key={i}>
          <span
            style={{
              visibility: guessedLett.includes(lett) ? "visible" : "hidden",
            }}
          >
            {lett}
          </span>
        </span>
      ))}
    </div>
  );
};
