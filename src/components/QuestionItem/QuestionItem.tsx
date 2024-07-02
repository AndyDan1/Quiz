import { FC, useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

import style from "./QuestionItem.module.scss";

import Female from "../../assets/img/Female.png";
import Male from "../../assets/img/Male.png";
import Other from "../../assets/img/Other.png";
import EmojiHorse from "../../assets/img/EmojiHorse.png";
import EmojiRomance from "../../assets/img/EmojiRomance.png";
import EmojiDance from "../../assets/img/EmojiDance.png";
import EmojiAdult from "../../assets/img/EmojiAdult.png";
import EmojiRoyal from "../../assets/img/EmojiRoyal.png";
import EmojiBadBoy from "../../assets/img/EmojiBadBoy.png";
import EmojiBillion from "../../assets/img/EmojiBillion.png";

import { Select } from "../../constant/typeSelect";

interface IQuestionItemProps {
  index: number;
  option: string;
  nextPath: string;
  variant?: string;
  toggleOption: (option: string) => void;
  selectedOptions: string[];
  type: Select;
  handleAnswerClick: () => void;
}

const QuestionItem: FC<IQuestionItemProps> = ({
  index,
  option,
  handleAnswerClick,
  variant,
  toggleOption,
  selectedOptions,
  type,
}) => {
  const getLocalStorage = localStorage.getItem("Quiz") || null;
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const setLocalStorage = useCallback(
    (params: string) => {
      if (!getLocalStorage) return;

      const languageMap = {
        English: "en",
        French: "fr",
        German: "de",
        Spanish: "es",
      };

      if (params in languageMap) {
        changeLanguage(languageMap[params as keyof typeof languageMap]);
      }

      const parsedData = JSON.parse(getLocalStorage) || {};
      const quizMappings: { [key: string]: string } = {
        "/quiz/1": "language",
        "/quiz/2": "gender",
        "/quiz/3": "age",
      };

      const keyToUpdate = quizMappings[location.pathname];
      if (keyToUpdate) {
        parsedData[keyToUpdate] = params;
        localStorage.setItem("Quiz", JSON.stringify(parsedData));
      }
    },
    [location.pathname]
  );

  const img = useMemo(() => {
    if (variant) {
      const images = {
        line: [Female, Male, Other],
        bubble: [
          EmojiHorse,
          EmojiDance,
          EmojiRoyal,
          EmojiBillion,
          EmojiRomance,
          EmojiAdult,
          EmojiBadBoy,
        ],
      } as any;
      return variant && images[variant] ? images[variant][index] : null;
    }
  }, [variant]);
  return (
    <>
      {(type === Select.SingleSelect || type === Select.SingleSelectImage) && (
        <div className={clsx(style.link, {})}>
          <li
            className={clsx({
              [style.column]: variant === "line",
            })}
            onClick={() => {
              setLocalStorage(option);
              handleAnswerClick();
            }}
          >
            {variant === "line" && <img src={img as string} alt="" />}
            {t(option)}
          </li>
        </div>
      )}
      {type === Select.MultipleSelect && (
        <>
          <div className={style.multiSelectContainer}>
            <div
              className={`${style.option} ${
                selectedOptions.includes(option) ? style.selected : ""
              }`}
              onClick={() => toggleOption(option)}
            >
              {option}
              <div
                className={`${style.checkbox} ${
                  selectedOptions.includes(option) ? style.selected : ""
                }`}
              />
            </div>
          </div>
        </>
      )}
      {type === Select.Bubble && (
        <>
          <div
            className={clsx(style.bubble, {
              [style.bubble__selected]: selectedOptions.includes(option),
            })}
          >
            <li
              className={clsx({
                [style.bubble]: variant === "bubble",
              })}
              onClick={() => {
                toggleOption(option);
              }}
            >
              <img src={img as string} alt="" />
              {t(option)}
            </li>
          </div>
        </>
      )}
    </>
  );
};

export default QuestionItem;
