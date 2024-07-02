import { FC } from "react";
import { useTranslation } from "react-i18next";

import style from "./Loader.module.scss";

interface ILoaderProps {
  percentage: number;
}

const Loader: FC<ILoaderProps> = ({ percentage }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={style.loaderContainer}>
        <b> {`${percentage}%`}</b>
        <svg viewBox="0 0 36 36" className={style.svg}>
          <path
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
            className={style.circleBg}
          />
          <path
            strokeDasharray={`${percentage}, 100`}
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
            className={style.circle}
          />
        </svg>
      </div>
      <p className={style.caption}>{t("loading")}</p>
    </>
  );
};

export default Loader;
