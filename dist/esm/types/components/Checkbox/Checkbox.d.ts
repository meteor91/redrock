import React from 'react';
export interface CheckboxProps {
    checked: boolean;
    name: string;
    label: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const Checkbox: React.FC<CheckboxProps>;
