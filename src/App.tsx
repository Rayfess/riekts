import { useCallback, useEffect, useState } from "react";
import words from "./wordlists.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

const getWord = () => words[Math.floor(Math.random() * words.length)];

function App() {
  const [wordToGuess, setwordToGuess] = useState(() => getWord());
  const [guessedLetts, setguessedLetts] = useState<string[]>([]);

  const incorrLetts = guessedLetts.filter(
    (lett) => !wordToGuess.includes(lett),
  );

  const isLoser = incorrLetts.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((lett) => guessedLetts.includes(lett));

  const addGuessedLett = useCallback(
    (lett: string) => {
      if (guessedLetts.includes(lett) || isLoser || isWinner) return;

      setguessedLetts((currentLett) => [...currentLett, lett]);
    },
    [guessedLetts, isLoser, isWinner],
  );

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
  }, [guessedLetts]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== "Enter") return;
      e.preventDefault();
      setwordToGuess(getWord());
      setguessedLetts([]);
    };

    document.addEventListener("keypress", handler);

    return () => document.removeEventListener("keypress", handler);
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
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isWinner && "You Win - Refresh to Try Again"}
        {isLoser && "Nice Try - Refresh to Try Again"}
      </div>
      <HangmanDrawing numOfGuesses={incorrLetts.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetts={guessedLetts}
        wordToGuess={wordToGuess}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLett={guessedLetts.filter((lett) => wordToGuess.includes(lett))}
          inactiveLett={incorrLetts}
          addGuessedLett={addGuessedLett}
        />
      </div>
    </div>
  );
}

export default App;
