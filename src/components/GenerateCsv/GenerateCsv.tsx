import React, { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

import { Select } from "../../constant/typeSelect";

interface IGeneratePdf {
  className: string;
}

type QuizRow = {
  order: number;
  title: string;
  type: string;
  answer: string;
};

const GenerateCsv: React.FC<PropsWithChildren<IGeneratePdf>> = ({
  children,
  className,
}) => {
  const { t } = useTranslation();
  const exportToCSV = () => {
    const storedData = localStorage.getItem("Quiz");
    if (!storedData) {
      alert("No data found in localStorage");
      return;
    }
    const quizData = JSON.parse(storedData);

    const exampleData = [
      {
        order: 1,
        title: `${t(`questionLanguagePdf`)}`,
        type: Select.SingleSelect,
        answer: quizData.language,
      },
      {
        order: 2,
        title: t(`gender.title`),
        type: Select.SingleSelectImage,
        answer: quizData.gender,
      },
      {
        order: 3,
        title: t(`age.title`),
        type: Select.SingleSelect,
        answer: quizData.age,
      },
      {
        order: 4,
        title: t(`hate.title`),

        type: Select.MultipleSelect,
        answer: quizData.hate.join(", "),
      },
      {
        order: 5,
        title: t(`topics.title`),

        type: Select.Bubble,
        answer: quizData.favorite.join(", "),
      },
      { order: 6, title: "Email", type: Select.Email, answer: quizData.email },
    ];

    const convertToCSV = (objArray: QuizRow[]) => {
      const array = [Object.keys(objArray[0])].concat(objArray);

      return array
        .map((row) => {
          return Object.values(row)
            .map((value) => `"${value}"`)
            .join(",");
        })
        .join("\n");
    };

    const csvData = convertToCSV(exampleData);

    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", "export.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className={className} onClick={exportToCSV}>
      {children}
    </button>
  );
};

export default GenerateCsv;
