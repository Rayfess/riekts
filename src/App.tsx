import { useState } from "react";
import words from "./wordlists.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
function App() {
  const [wordToGuess, setwordToGuess] = useState(() => {
    return "test";
    // return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetts, setguessedLetts] = useState<string[]>(["g", "t", "v"]);
  const incorrLetts = guessedLetts.filter(
    (lett) => !wordToGuess.includes(lett),
  );

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
      <HangmanDrawing numOfGuesses={incorrLetts.length} />
      <HangmanWord />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
