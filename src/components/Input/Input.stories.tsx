import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Input, type InputProps } from './Input';

const meta: Meta<typeof Input> = {
    title: 'Input',
    component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

// interface InputPreviewProps {
//     disabled: boolean;
//     error: boolean;
// }

type Props = Partial<InputProps>;

const InputPreview: React.FC<Props> = (props) => {
    const { value: initialValue, ...rest } = props;

    const [value, setValue] = useState(initialValue ?? '');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
    };

    return (
        <Input
            onChange={handleChange}
            value={value}
            placeholder='placeholder'
            {...rest}
        />
    );
};

export const Basic: Story = {
    render: () => <InputPreview />,
};

export const Disabled: Story = {
    render: () => <InputPreview disabled />,
};

export const Error: Story = {
    render: () => <InputPreview error value='errorVal' />,
};
