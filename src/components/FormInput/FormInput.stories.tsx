import React, { useState } from "react";
import type { Meta, StoryObj } from '@storybook/react';
import {FormInput, FormInputProps} from './FormInput'

const meta: Meta<typeof FormInput> = {
    title: 'FormInput',
    component: FormInput,
}

export default meta;

type Story = StoryObj<typeof FormInput>;

type Props = Partial<FormInputProps>;

const FormInputPreview = (props: Props) => {
    const {value: initialValue} = props;

    const [value, setValue] = useState(initialValue ?? '');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (
        <div>
            <FormInput
                onChange={handleChange}
                value={value}
                label={props.label ?? 'some label'}
                placeholder={props.placeholder ?? 'placeholder'}
                message={props.message ?? 'some helpful message'}
                error={props.error ?? false}
            />
        </div>
    )
}

export const Basic: Story = {
    render: () => (
        <FormInputPreview
            label='Name'
            placeholder='Type here'
            value='Jhon Doe'
            message='Something going wrong'
        />
    )
}

export const Error: Story = {
    render: () => (
        <FormInputPreview
            label='Name'
            placeholder='Type here'
            value='Jhon Doe'
            message='Something going wrong'
            error={true}
        />
    )
}