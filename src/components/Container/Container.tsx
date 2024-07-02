import { FC, PropsWithChildren } from "react";

import style from "./Container.module.scss";
import clsx from "clsx";

interface IContainerProps {
  className?: string;
}

const Container: FC<PropsWithChildren<IContainerProps>> = ({
  children,
  className,
}) => {
  return <div className={clsx(style.container, className)}>{children}</div>;
};

export default Container;
