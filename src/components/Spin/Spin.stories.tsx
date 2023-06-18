import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Spin } from './Spin';

const meta: Meta<typeof Spin> = {
    title: 'Spin',
    component: Spin,
    argTypes: {
        spinning: { control: 'boolean' },
        children: { control: 'text' },
    },
    args: {
        spinning: true,
    },
};

export default meta;

type Story = StoryObj<typeof Spin>;

export const Basic: Story = {
    render: (args) => <Spin {...args}/>,
};
