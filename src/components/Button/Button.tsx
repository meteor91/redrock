import React from "react";
// import './Button.less';
import style from './Button.module.less';

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className={style.btn}>{props.label}</button>;
};

export default Button;