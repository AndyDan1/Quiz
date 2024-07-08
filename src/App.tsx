import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import "./App.scss";

import Question from "./components/Question/Question";
import Email from "./components/Email/Email";
import Thanks from "./components/Thanks/Thanks";

import { Select } from "./constant/typeSelect";

const quizData = [
  {
    path: "/quiz/1",
    type: Select.SingleSelect,
    variant: "column",
    question: "welcome",
    options: "welcomeArray",
    help: "Choose language",
    nextPath: "/quiz/2",
  },
  {
    path: "/quiz/2",
    type: Select.SingleSelectImage,
    variant: "line",
    question: "gender.title",
    options: "gender.option",
    help: "gender.subtitle",
    nextPath: "/quiz/3",
  },
  {
    path: "/quiz/3",
    type: Select.SingleSelect,
    variant: "column",
    question: "age.title",
    options: "age.option",
    nextPath: "/quiz/4",
  },
  {
    path: "/quiz/4",
    type: Select.MultipleSelect,
    variant: "column",
    question: "hate.title",
    options: "hate.option",
    nextPath: "/quiz/5",
  },
  {
    path: "/quiz/5",
    type: Select.Bubble,
    variant: "bubble",
    question: "topics.title",
    options: "topics.option",
    help: "topics.subtitle",
    nextPath: "/email",
  },
];

function App() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  const location = useLocation();
  const getLocalStorage = localStorage.getItem("Quiz");

  useEffect(() => {
    const storage = {
      language: "",
      gender: "",
      age: "",
      hate: [],
      favorite: [],
      email: "",
    };
    if (!getLocalStorage) {
      localStorage.setItem("Quiz", JSON.stringify(storage));
      navigation("/quiz/1");
    }
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      navigation("/quiz/1");
    }
  }, [location.pathname]);

  return (
    <Routes>
      {quizData.map(
        ({ path, type, variant, question, options, help, nextPath }) => {
          return (
            <Route
              key={path}
              path={path}
              element={
                <Question
                  type={type}
                  variant={variant}
                  question={t(question)}
                  options={t(options, { returnObjects: true })}
                  help={t(help as string)}
                  nextPath={nextPath}
                />
              }
            />
          );
        }
      )}
      <Route path="/email" element={<Email />} />
      <Route path="/thanks" element={<Thanks />} />
    </Routes>
  );
}

export default App;
