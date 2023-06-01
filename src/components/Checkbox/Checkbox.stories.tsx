import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
    title: 'Checkbox',
    component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export interface Props {
    label: string;
    name: string;
    value?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Preview: React.FC<Props> = (props) => {
    const { value: initialValue, ...rest } = props;

    const [value, setValue] = useState(initialValue ?? false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.checked);
    };

    return (
        <Checkbox
            onChange={handleChange}
            checked={value}
            {...rest}
        />
    );
};

export const Default: Story = {
    render: () => <Preview label="Checkbox" name="checkbox" value={true}/>,
};
