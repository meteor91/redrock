import React from 'react';
export interface InputFieldProps {
    label?: string;
    value: string;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    message?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const InputField: React.FC<InputFieldProps>;
