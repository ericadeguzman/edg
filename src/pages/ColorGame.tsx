import { useEffect, useState } from "react";
const getRandomColor = () => {
  const digits = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const color = new Array(6)
    .fill("")
    .map(() => digits[Math.floor(Math.random() * digits.length)])
    .join("");

  return `#${color}`;
};

enum Result {
  Correct,
  Wrong,
}

function ColorGame() {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<Result | undefined>(undefined);

  const generateColors = () => {
    const actualColor = getRandomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };

  useEffect(() => {
    generateColors();
  }, []);

  const handleAnswerClicked = (answer: string) => {
    if (answer === color) {
      setResult(Result.Correct);
      generateColors();
    } else {
      setResult(Result.Wrong);
    }
  };
  return (
    <div>
      <h1>choose correct color:</h1>
      <p>
        In this game you need to click the button that displays the correct
        color hex code.
      </p>
      <div className="colorBox" style={{ background: color }}></div>
      {answers.map((answer) => (
        <button
          onClick={() => handleAnswerClicked(answer)}
          key={answer}
          className="colorButton"
        >
          {answer}
        </button>
      ))}
      <div className="colorAnswers">
      {result === Result.Correct && <p className="rightAnswer">Correct!</p>}
      {result === Result.Wrong && <p className="wrongAnser">Wrong Answer!</p>}
      </div>
    </div>
  );
}

export default ColorGame;