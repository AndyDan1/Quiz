import { FC } from "react";

import style from "./Title.module.scss";

interface ITitleProps {
  title: string;
  help: string;
}

const Title: FC<ITitleProps> = ({ title, help }) => {
  return (
    <div className={style.title}>
      <h1>{title}</h1>
      <h2>{help}</h2>
    </div>
  );
};

export default Title;
