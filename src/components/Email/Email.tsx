import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";

import Button from "../Button/Button";
import Container from "../Container/Container";
import Loader from "../Loader/Loader";
import Title from "../Title/Title";

import style from "./Email.module.scss";

interface IEmailProps {}

interface IFormInput {
  email: string;
}
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const Email: FC<IEmailProps> = () => {
  const { t } = useTranslation();
  const schema = yup.object().shape({
    email: yup
      .string()
      .matches(emailRegex, t("email.errorNotCorrect"))
      .required(t("email.errorEmptyField")),
  });
  const [isLoading, setIsLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
  const navigation = useNavigate();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const getLocalStorage = localStorage.getItem("Quiz") || null;

    if (getLocalStorage && data) {
      const parsedData = JSON.parse(getLocalStorage);
      parsedData.email = data.email;
      localStorage.setItem("Quiz", JSON.stringify(parsedData));

      navigation("/thanks");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        const newPercentage = prevPercentage + 2;
        if (newPercentage >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return newPercentage;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.emailPage}>
      <Container>
        {isLoading ? (
          <Loader percentage={percentage} />
        ) : (
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Title title={t("email.title")} help={t("email.subtitle")} />
              <input
                style={{
                  border: errors.email ? "2px solid red" : "2px solid blue",
                }}
                {...register("email")}
                type="text"
              />
              {errors.email && (
                <p
                  style={{ color: "red", marginTop: "10px", fontSize: "15px" }}
                >
                  {errors.email.message}
                </p>
              )}
              <Button>{t("buttonNext")}</Button>
            </form>

            <p>
              By continuing I agree with <Link to="#">Privacy policy</Link> and
              <Link to={"#"}>Terms of use</Link>.
            </p>
          </>
        )}
      </Container>
    </div>
  );
};

export default Email;
