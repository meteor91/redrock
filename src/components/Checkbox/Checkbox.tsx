import React from 'react';
import style from './Checkbox.module.less';
import { CheckboxInactiveIcon } from '../../internal/svg-icons/CheckboxInactiveIcon';
import { CheckboxActiveIcon } from '../../internal/svg-icons/CheckboxActiveIcon';

export interface CheckboxProps {
    checked: boolean;
    name: string;
    label: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
    const { checked, name, label, onChange } = props;
    return (
        <label
            className={style.checkbox}
        >
            <span className={style['checkbox-icon']}>
                <input
                    name={name}
                    className={style['checkbox-input']}
                    onChange={onChange}
                    checked={checked}
                    type="checkbox"
                />
                {checked
                    ? <CheckboxActiveIcon/>
                    : <CheckboxInactiveIcon/>
                }
            </span>

            <span className={style['checkbox-label']}>{label}</span>
        </label>
    );
};
