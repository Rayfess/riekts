const HEAD = (
  <div
    key="head"
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  ></div>
);

const BODY = (
  <div
    key="body"
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: 0,
    }}
  ></div>
);

const RARM = (
  <div
    key="rArm"
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);

const LARM = (
  <div
    key="lArm"
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  ></div>
);

const RLEG = (
  <div
    key="rLeg"
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);

const LLEG = (
  <div
    key="lLeg"
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  ></div>
);

const HANGER = (
  <>
    <div
      key="hanger"
      style={{
        height: "50px",
        width: "10px",
        background: "black",
        position: "absolute",
        top: 0,
        right: 0,
      }}
    />
    <div
      style={{
        height: "10px",
        width: "200px",
        background: "black",
        marginLeft: "120px",
      }}
    />
    <div
      style={{
        height: "400px",
        width: "10px",
        background: "black",
        marginLeft: "120px",
      }}
    />
    <div style={{ height: "10px", width: "250px", background: "black" }} />
  </>
);

const BodyParts = [HEAD, BODY, RARM, LARM, RLEG, LLEG];

type HangmanDrawingProps = {
  numOfGuesses: number;
};

export const HangmanDrawing = ({ numOfGuesses }: HangmanDrawingProps) => {
  return (
    <div style={{ position: "relative" }}>
      {HANGER}
      {BodyParts.slice(0, numOfGuesses)}
    </div>
  );
};
