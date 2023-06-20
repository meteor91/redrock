import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputField, type InputFieldProps } from './InputField';

const meta: Meta<typeof InputField> = {
    title: 'InputField',
    component: InputField,
};

export default meta;

type Story = StoryObj<typeof InputField>;

type Props = Partial<InputFieldProps>;

const InputFieldPreview: React.FC<Props> = (props) => {
    const { value: initialValue } = props;

    const [value, setValue] = useState(initialValue ?? '');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
    };

    return (
        <div>
            <InputField
                onChange={handleChange}
                value={value}
                label={props.label ?? 'some label'}
                placeholder={props.placeholder ?? 'placeholder'}
                message={props.message ?? 'some helpful message'}
                error={props.error ?? false}
            />
        </div>
    );
};

export const Basic: Story = {
    render: () => (
        <InputFieldPreview
            label='Name'
            placeholder='Type here'
            value='Jhon Doe'
            message='Something going wrong'
        />
    ),
};

export const Error: Story = {
    render: () => (
        <InputFieldPreview
            label='Name'
            placeholder='Type here'
            value='Jhon Doe'
            message='Something going wrong'
            error={true}
        />
    ),
};
