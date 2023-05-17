import React from "react";
export interface ButtonProps {
    label: string;
    disabled?: boolean;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: 'primary' | 'secondary' | 'tertiary';
}
export declare const Button: (props: ButtonProps) => React.JSX.Element;
