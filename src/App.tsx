import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import "./App.scss";

import Question from "./components/Question/Question";
import Email from "./components/Email/Email";
import Thanks from "./components/Thanks/Thanks";

import { Select } from "./constant/typeSelect";

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
    }
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      navigation("/quiz/1");
    }
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route
          path="/quiz/1"
          element={
            <Question
              type={Select.SingleSelect}
              variant="column"
              question={t(`welcome`)}
              options={["English", "French", "German", "Spanish"]}
              help="Choose language"
              nextPath="/quiz/2"
            />
          }
        />
        <Route
          path="/quiz/2"
          element={
            <Question
              type={Select.SingleSelectImage}
              variant="line"
              question={t(`gender.title`)}
              options={t("gender.option", { returnObjects: true })}
              help={t(`gender.subtitle`)}
              nextPath="/quiz/3"
            />
          }
        />
        <Route
          path="/quiz/3"
          element={
            <Question
              type={Select.SingleSelect}
              variant="column"
              question={t(`age.title`)}
              options={t("age.option", { returnObjects: true })}
              nextPath="/quiz/4"
            />
          }
        />
        <Route
          path="/quiz/4"
          element={
            <Question
              type={Select.MultipleSelect}
              variant="column"
              question={t(`hate.title`)}
              options={t("hate.option", { returnObjects: true })}
              nextPath="/quiz/5"
            />
          }
        />
        <Route
          path="/quiz/5"
          element={
            <Question
              variant="bubble"
              type={Select.Bubble}
              question={t(`topics.title`)}
              options={t("topics.option", { returnObjects: true })}
              help={t(`topics.subtitle`)}
              nextPath="/email"
            />
          }
        />
        <Route path="/email" element={<Email />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </>
  );
}

export default App;
