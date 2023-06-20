import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
declare const meta: Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof Checkbox>;
export interface Props {
    label: string;
    name: string;
    value?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const Default: Story;
