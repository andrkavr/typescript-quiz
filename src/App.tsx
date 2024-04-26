import { useState } from "react";
import { Footer } from "./Footer";
import { QuestionCard } from "./components/QuestionCard";

function App() {
  //question-related
  const TOTAL_QUESTIONS = 10;

  //states
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [qNumber, setQNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [qScore, setQScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  //functions
  const startTrivia = async () => {};
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const nextQuestion = () => {};
  return (
    <>
      <h1>Quiz Time!</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score: </p>
      <p className="loading">Loading Questions...</p>
      <QuestionCard
        questionNumber={qNumber + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[qNumber].question}
        answers={questions[qNumber].answers}
        userAnswer={userAnswers ? userAnswers[qNumber] : undefined}
        callback={checkAnswer}
      />
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
      <Footer />
    </>
  );
}

export default App;
