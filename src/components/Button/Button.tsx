import React from "react";
// import './Button.less';
import style from './Button.module.less';

export interface ButtonProps {
    label: string;
    disabled?: boolean;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: 'primary' | 'secondary' | 'tertiary';
}

export const Button = (props: ButtonProps) => {
    const {
        label,
        variant,
        disabled,
        onClick
    } = props;

    return (
        <button
            onClick={onClick}
            className={`${style.btn} ${variant ? style['btn-secondary'] : ''}`}
            disabled={disabled}
        >
            {label}
        </button>
    );
};
