import React from "react";
import {Input} from "../Input/Input";
import styles from './FormInput.module.less';

export interface FormInputProps {
    label?: string;
    value: string;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    message?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput = (props: FormInputProps) => {
    const {
        label,
        value,
        placeholder,
        disabled,
        error,
        message,
        onChange
    } = props;
    return (
        <div className={styles.formInput}>
            {label && (
                <label className={styles.label}>
                    {label}
                </label>
            )}

            <Input
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                error={error}
            />

            {message && (
                <div className={`${styles.message} ${error ? styles.error : ''}`}>
                    {message}
                </div>

            )}
        </div>
    )
}