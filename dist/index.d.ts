import React from 'react';

interface ButtonProps {
    label: string;
    disabled?: boolean;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: 'primary' | 'secondary' | 'tertiary';
}
declare const Button: (props: ButtonProps) => React.JSX.Element;

interface InputProps {
    value: string;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Input: (props: InputProps) => React.JSX.Element;

interface FormInputProps {
    label?: string;
    value: string;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    message?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const FormInput: (props: FormInputProps) => React.JSX.Element;

export { Button, FormInput, Input };
