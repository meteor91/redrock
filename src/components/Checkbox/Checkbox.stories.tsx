import React, {useState} from "react";
import type {Meta, StoryObj} from '@storybook/react';

import {Checkbox} from './Checkbox';

const meta: Meta<typeof Checkbox> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
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

const Preview = (props: Props) => {
    const {value: initialValue, ...rest} = props;

    const [value, setValue] = useState(initialValue ?? false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked);
    }

    return (
        <Checkbox
            onChange={handleChange}
            checked={value}
            {...rest}
        />
    )
}

export const Default: Story = {
    render: () => <Preview label="Checkbox" name="checkbox" value={true}/>,
};
