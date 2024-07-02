import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Container from "../Container/Container";

import style from "./Header.module.scss";

interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
  const [barProgress, setBarProgress] = useState(0);
  const navigate = useNavigate();

  const location = useLocation();

  const goBack = () => {
    if (location.pathname === "/quiz/2") {
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
    }
    navigate(-1);
  };
  useEffect(() => {
    const pathIndex = Number(location.pathname.split("/").pop());
    let progress = 20 * pathIndex;

    if (location.pathname === "/quiz/1" || location.pathname === "/quiz/5") {
      progress -= 10;
    }

    setBarProgress(progress);
  }, [location]);

  return (
    <header className={style.header}>
      <Container className={style.container}>
        <div className={style.question}>
          <span>{location.pathname.slice(-1)}</span>/5
        </div>
        <div className={style.progress}>
          <div
            style={{ width: `${barProgress}%` }}
            className={style.progress__bar}
          ></div>
        </div>
        {location.pathname !== "/quiz/1" && (
          <button onClick={() => goBack()}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 8L10 12L14 16"
                stroke="#F5F7FB"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </Container>
    </header>
  );
};

export default Header;
