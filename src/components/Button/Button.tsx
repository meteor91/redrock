import React from 'react';
import clsx from 'clsx';

import style from './Button.module.less';

type Variant = 'primary' | 'secondary' | 'tertiary';
export interface ButtonProps {
    label: string;
    disabled?: boolean;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: Variant;
    type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        label,
        variant,
        disabled,
        onClick,
        type,
    } = props;

    return (
        <button
            onClick={onClick}
            className={clsx(style.btn, getButtonVariantClassName(variant))}
            disabled={disabled}
            type={type}
        >
            {label}
        </button>
    );
};

const getButtonVariantClassName = (variant?: Variant): string | null => {
    switch (variant) {
        case 'secondary':
            return style['btn-secondary'];
        default:
            return null;
    }
};
