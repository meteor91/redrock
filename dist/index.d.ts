import React from 'react';
import { FieldValues, DefaultValues } from 'react-hook-form';

interface InputProps {
    value: string;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Input: React.FC<InputProps>;

interface InputFieldProps {
    label?: string;
    value: string;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    message?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const InputField: React.FC<InputFieldProps>;

type Variant = 'primary' | 'secondary' | 'tertiary';
interface ButtonProps {
    label: string;
    disabled?: boolean;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: Variant;
    type?: 'button' | 'submit' | 'reset';
}
declare const Button: React.FC<ButtonProps>;

interface CheckboxProps {
    checked: boolean;
    name: string;
    label: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Checkbox: React.FC<CheckboxProps>;

interface ColumnType<RecordType> {
    title?: string;
    dataIndex?: keyof RecordType;
    render?: (value: any, record?: RecordType, index?: number) => React.ReactNode;
}
type GetRowKey<RecordType> = (record: RecordType, index?: number) => React.Key;
type RowKey<RecordType> = string | keyof RecordType | GetRowKey<RecordType>;

interface TableProps<RecordType> {
    dataSource: RecordType[];
    columns: Array<ColumnType<RecordType>>;
    rowKey?: RowKey<RecordType>;
    loading?: boolean;
    emptyText?: string;
}
declare const Table: <T>(props: TableProps<T>) => React.ReactElement;

interface SpinProps {
    spinning?: boolean;
    children?: React.ReactNode;
}
declare const Spin: React.FC<SpinProps>;

interface RowProps {
    children?: React.ReactNode;
}
declare const Row: React.FC<RowProps>;

interface ColProps {
    children?: React.ReactNode;
    span: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;
}
declare const Col: React.FC<ColProps>;

interface FormInputProps {
    label?: string;
    name: string;
    placeholder?: string;
    disabled?: boolean;
}

interface FormProps<T> {
    onSubmit: (data: T) => void;
    children?: React.ReactNode;
    defaultValues: DefaultValues<T>;
}
declare const Form: {
    <T extends FieldValues>(props: FormProps<T>): React.ReactElement;
    FormInput: React.FC<FormInputProps>;
};

export { Button, ButtonProps, Checkbox, CheckboxProps, Col, Form, Input, InputField, InputFieldProps, InputProps, Row, Spin, SpinProps, Table, TableProps };
