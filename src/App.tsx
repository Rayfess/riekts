import { useEffect, useState } from "react";
import words from "./wordlists.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
function App() {
  const [wordToGuess, setwordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetts, setguessedLetts] = useState<string[]>([]);

  const incorrLetts = guessedLetts.filter(
    (lett) => !wordToGuess.includes(lett),
  );

  const addGuessedLett = (lett: string) => {
    if (guessedLetts.includes(lett)) return;

    setguessedLetts((currentLett) => [...currentLett, lett]);
  };

  console.log(wordToGuess);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLett(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

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
      <HangmanWord guessedLetts={guessedLetts} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
