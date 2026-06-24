import { useState } from "react"
import  words  from "./wordlists.json";
function App() {
  const [wordToGuess, setwordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetts, setguessedLetts] = useState<string[]>([])
  console.log(wordToGuess)
  return <h1>hello world</h1>
}

export default App
