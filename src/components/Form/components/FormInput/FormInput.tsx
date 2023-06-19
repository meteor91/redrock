import React from 'react';
import { InputField } from '../../../InputField';
import { useFormContext, Controller } from 'react-hook-form';

export interface FormInputProps {
    label?: string;
    name: string;
    placeholder?: string;
    disabled?: boolean;
}

export const FormInput: React.FC<FormInputProps> = (props: FormInputProps) => {
    const {
        name,
        label,
        placeholder,
        disabled,
    } = props;
    const methods = useFormContext();

    return (
        <Controller
            name={name}
            control={methods.control}
            render={({ field, fieldState }) => (
                <InputField
                    label={label}
                    disabled={disabled}
                    placeholder={placeholder}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.invalid}
                    message={fieldState.error?.message}
                />
            )}
        />
    );
};
