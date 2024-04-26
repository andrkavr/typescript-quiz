import { useEffect, useState } from "react";

export const API = () => {
  const [loading, setLoading] = useState(true);
  const categories: string[] = [
    "Any Category",
    "General Knowledge",
    "Entertainment: Books",
    "Entertainment: Film",
    "Entertainment: Music",
    "Entertainment: Television",
    "Entertainment: Video Games",
    "Science & Nature",
    "Science: Computers",
    "Mythology",
    "Sports",
    "Geography",
    "History",
    "Celebrities",
    "Animals",
  ];
  // Any cat : https://opentdb.com/api.php?amount=10&type=multiple
  // General cat : https://opentdb.com/api.php?amount=10&category=9
  // Movie cat: https://opentdb.com/api.php?amount=10&category=11&type=multiple
  const quizCat = {
    "Any Category": 9,
    "General Knowledge": 9,
    "Entertainment: Books": 10,
    "Entertainment: Film": 11,
    "Entertainment: Music": 12,
    "Entertainment: Television": 14,
    "Entertainment: Video Games": 15,
    "Science & Nature": 17,
    "Science: Computers": 18,
    Mythology: 20,
    Sports: 21,
    Geography: 22,
    History: 23,
    Celebrities: 26,
    Animals: 27,
  };

  useEffect(() => {
    const questionFetch = async () => {
      const questions = await fetch(
        "https://opentdb.com/api.php?amount=10&category=9&type=multiple"
      );
      const jsonQuestions = await questions.json();
      setLoading(!loading);

      return jsonQuestions;
    };

    questionFetch();
  }, []);

  //   return <div>API</div>;
};
