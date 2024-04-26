import { useEffect, useState } from "react";

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export enum QuestionCategories {
  GENERAL_KNOWLEDGE = 9,
  BOOKS = 10,
  FILM = 11,
  MUSIC = 12,
  TV = 14,
  VIDEO_GAMES = 15,
  SCIENCE_AND_NATURE = 17,
  COMPUTERS = 18,
  MYTHOLOGY = 20,
  SPORTS = 21,
  GEOGRAPHY = 22,
  HISTORY = 23,
  CELEBRITIES = 26,
  ANIMALS = 27,
}

export const questionFetch = async (
  amount: number,
  difficulty: Difficulty,
  category?: number
) => {
  let endpoint;
  if (category) {
    endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
  } else {
    endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  }

  const endpointAnyDiff = `https://opentdb.com/api.php?amount=${amount}&category=${category}&type=multiple`;

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

  const data = await (await fetch(endpoint)).json();
  console.log(data);
};
