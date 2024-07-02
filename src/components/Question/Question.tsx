import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

import Header from "../Header/Header";
import Title from "../Title/Title";
import Container from "../Container/Container";
import QuestionItem from "../QuestionItem/QuestionItem";
import Button from "../Button/Button";

import { Select } from "../../constant/typeSelect";

import style from "./Question.module.scss";

interface IQuestionProps {
  question: string;
  options: string[];
  nextPath: string;
  help?: string;
  variant?: string;
  type: Select;
}

const Question: FC<IQuestionProps> = ({
  question,
  options,
  nextPath,
  help,
  variant,
  type,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const navigation = useNavigate();
  const location = useLocation();
  const [animation, setAnimation] = useState(false);
  const { t } = useTranslation();
  const getLocalStorage = localStorage.getItem("Quiz") || null;

  const toggleOption = (option: string) => {
    setSelectedOptions((prevSelected) => {
      if (prevSelected.includes(option)) {
        return prevSelected.filter((item) => item !== option);
      } else {
        if (location.pathname === "/quiz/5" && prevSelected.length >= 3) {
          return prevSelected;
        } else {
          return [...prevSelected, option];
        }
      }
    });
  };

  const handleAnswerClick = () => {
    setAnimation(true);
    setTimeout(() => {
      navigation(nextPath);
      setAnimation(false);
    }, 700);
  };

  const setLocalStorage = () => {
    if (location.pathname === "/quiz/4") {
      if (!getLocalStorage) return;
      const parsedData = JSON.parse(getLocalStorage);

      parsedData.hate = selectedOptions;
      localStorage.setItem("Quiz", JSON.stringify(parsedData));
      setSelectedOptions([]);
      navigation("/quiz/5");
    }
    if (location.pathname === "/quiz/5") {
      if (!getLocalStorage) return;
      const parsedData = JSON.parse(getLocalStorage);

      parsedData.favorite = selectedOptions;
      localStorage.setItem("Quiz", JSON.stringify(parsedData));
      setSelectedOptions([]);
      navigation("/email");
    }
    handleAnswerClick();
  };

  useEffect(() => {
    const getLocalStorage = localStorage.getItem("Quiz");
    if (getLocalStorage) {
      const parsedData = JSON.parse(getLocalStorage);

      if (location.pathname === "/quiz/4" && parsedData.hate) {
        setSelectedOptions(parsedData.hate);
      }
      if (location.pathname === "/quiz/5" && parsedData.favorite) {
        setSelectedOptions(parsedData.favorite);
      }
    }
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Container className={style.container}>
        <Title title={question} help={help as string} />
        <ul
          className={clsx(style.anim, {
            [style.variant__column]: variant === "column",
            [style.variant__line]: variant === "line",
            [style.variant__bubble]: variant === "bubble",
            [style.animation]: animation,
          })}
        >
          {options.map((option: string, index: number) => {
            return (
              <QuestionItem
                handleAnswerClick={handleAnswerClick}
                key={index}
                option={option}
                index={index}
                nextPath={nextPath}
                variant={variant}
                toggleOption={toggleOption}
                type={type}
                selectedOptions={selectedOptions}
              />
            );
          })}
        </ul>
        {type === Select.MultipleSelect && (
          <Button
            disabled={!selectedOptions.length}
            onClick={() => {
              setLocalStorage();
            }}
          >
            {t("buttonNext")}
          </Button>
        )}
        {type === Select.Bubble && (
          <Button
            disabled={selectedOptions.length < 3}
            onClick={() => {
              setLocalStorage();
            }}
          >
            {t("buttonNext")}
          </Button>
        )}
      </Container>
    </>
  );
};

export default Question;
