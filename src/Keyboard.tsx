import styles from "./keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  disabled?: boolean;
  activeLett: string[];
  inactiveLett: string[];
  addGuessedLett: (lett: string) => void;
};

export const Keyboard = ({
  disabled = false,
  activeLett,
  inactiveLett,
  addGuessedLett,
}: KeyboardProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLett.includes(key);
        const inActive = inactiveLett.includes(key);
        const isDisable = isActive || inActive || disabled;
        return (
          <button
            key={key}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${inActive ? styles.inactive : ""}  `}
            onClick={() => addGuessedLett(key)}
            disabled={isDisable}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};
