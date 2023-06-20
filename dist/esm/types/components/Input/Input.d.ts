import React from 'react';
export interface InputProps {
    value: string;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const Input: React.FC<InputProps>;
