import React, { PropsWithChildren } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { useTranslation } from "react-i18next";

import { Select } from "../../constant/typeSelect";

interface IGeneratePdf {
  className: string;
}

const GeneratePdf: React.FC<PropsWithChildren<IGeneratePdf>> = ({
  children,
  className,
}) => {
  const { t } = useTranslation();
  const generatePDF = () => {
    const storedData = localStorage.getItem("Quiz");
    if (!storedData) {
      console.error("No data found in localStorage");
      return;
    }

    const quizData = JSON.parse(storedData);

    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Quiz Results", 20, 20);

    const tableData = [
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

    autoTable(doc, {
      startY: 30,
      head: [["order", "title", "type", "answer"]],
      body: tableData.map((row) => [
        row.order,
        row.title,
        row.type,
        row.answer,
      ]),
    });

    doc.save("quiz_results.pdf");
  };

  return (
    <button className={className} onClick={generatePDF}>
      {children}
    </button>
  );
};

export default GeneratePdf;
