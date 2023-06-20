import React from 'react';
export interface FormInputProps {
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    message?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const FormInput: React.FC<FormInputProps>;
