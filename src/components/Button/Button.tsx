import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

import style from "./Button.module.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<PropsWithChildren<IButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <button className={style.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
