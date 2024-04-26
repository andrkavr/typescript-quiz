import { useState } from "react";
import { Footer } from "./Footer";
import { questionFetch } from "./API";
//Components
import { QuestionCard } from "./components/QuestionCard";
//Types
import { Difficulty, QuestionCategories, QuestionState } from "./API";

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {
  //question-related
  const TOTAL_QUESTIONS = 10;

  //states
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [qNumber, setQNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [qScore, setQScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  //functions
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await questionFetch(TOTAL_QUESTIONS, Difficulty.EASY);

    setQuestions(newQuestions);
    setQScore(0);
    setUserAnswers([]);
    setQNumber(0);
    setLoading(false);
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //user's answer
      const answer = e.currentTarget.value;

      //Check answer against correct answer
      const correct = questions[qNumber].correct_answer === answer;

      //Increase player score if correct
      if (correct) setQScore((prev) => prev + 1);

      //Save answer in user answer array
      const answerObj = {
        question: questions[qNumber].question,
        answer,
        correct,
        correctAnswer: questions[qNumber].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObj]);
    }
  };
  const nextQuestion = () => {
    //Display next question if current question is not the final question
    const nextQuestion = qNumber + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setQNumber(nextQuestion);
    }
  };
  return (
    <>
      <h1>Quiz Time!</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia}>
          Start
        </button>
      ) : null}
      {!gameOver && <p className="score">Score: {qScore} </p>}
      {loading && <p className="loading">Loading Questions...</p>}
      {!loading && !gameOver && (
        <QuestionCard
          questionNumber={qNumber + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[qNumber].question}
          answers={questions[qNumber].answers}
          userAnswer={userAnswers ? userAnswers[qNumber] : undefined}
          callback={checkAnswer}
        />
      )}
      {!gameOver &&
      !loading &&
      userAnswers.length === qNumber + 1 &&
      qNumber !== TOTAL_QUESTIONS - 1 ? (
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      ) : null}
      <Footer />
    </>
  );
}

export default App;
