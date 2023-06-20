import React from 'react';
import clsx from 'clsx';
import { Input } from '../Input';
import styles from './InputField.module.less';

export interface InputFieldProps {
    label?: string;
    value: string;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    message?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: React.FC<InputFieldProps> = (props) => {
    const {
        label,
        value,
        placeholder,
        disabled,
        error,
        message,
        onChange,
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
                <div className={clsx(styles.message, error && styles.error)}>
                    {message}
                </div>
            )}
        </div>
    );
};
