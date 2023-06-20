import React from 'react';
import { type FieldValues, type DefaultValues } from 'react-hook-form';
interface FormProps<T> {
    onSubmit: (data: T) => void;
    children?: React.ReactNode;
    defaultValues: DefaultValues<T>;
}
export declare const Form: {
    <T extends FieldValues>(props: FormProps<T>): React.ReactElement;
    FormInput: React.FC<import("./components/FormInput").FormInputProps>;
};
export {};
