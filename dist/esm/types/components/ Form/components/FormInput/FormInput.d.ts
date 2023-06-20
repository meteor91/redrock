import React from 'react';
export interface FormInputProps {
    label?: string;
    name: string;
    placeholder?: string;
    disabled?: boolean;
}
export declare const FormInput: React.FC<FormInputProps>;
