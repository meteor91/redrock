import React from 'react';
type Variant = 'primary' | 'secondary' | 'tertiary';
export interface ButtonProps {
    label: string;
    disabled?: boolean;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: Variant;
    type?: 'button' | 'submit' | 'reset';
}
export declare const Button: React.FC<ButtonProps>;
export {};
