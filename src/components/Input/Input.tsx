import React from "react";
import styles from './Input.module.less'

export interface InputProps {
    value: string;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props : InputProps) => {
    const {
        value,
        placeholder,
        disabled,
        error,
        onChange
    } = props;
    return (
        <input
            className={`${styles.input} ${error ? styles['input-error']: ''}`}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            disabled={disabled}
        />
    )
}