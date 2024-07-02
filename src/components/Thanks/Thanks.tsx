import { FC } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import style from "./Thanks.module.scss";

import Container from "../Container/Container";
import Title from "../Title/Title";
import GeneratePdf from "../GeneratePdf/GeneratePdf";
import Button from "../Button/Button";

import Checkmark from "../../assets/img/Checkmark.png";
import Download from "../../assets/img/Download.png";

const Thanks: FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigate();
  const retakeQuiz = () => {
    localStorage.setItem(
      "Quiz",
      JSON.stringify({
        language: "",
        gender: "",
        age: "",
        hate: [],
        favorite: [],
        email: "",
      })
    );
    navigation("/quiz/1");
  };
  return (
    <>
      <Container className={style.thanks}>
        <Title title={t("thanks.title")} help={t("thanks.description")} />
        <div className={style.img}>
          <img src={Checkmark} alt="" />
        </div>
        <GeneratePdf className={style.download}>
          <img src={Download} alt="" />
          <div className={style.description}>{t("thanks.downloadText")}</div>
        </GeneratePdf>
        <Button onClick={() => retakeQuiz()}>{t("thanks.retake")}</Button>
      </Container>
    </>
  );
};

export default Thanks;
