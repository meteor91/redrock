import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Table } from './Table';
import { type ColumnType } from './interfaces';

const meta: Meta<typeof Table> = {
    title: 'Table',
    component: Table,
    argTypes: {
        loading: { control: 'boolean' },
    },
    args: {
        loading: false,
    },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Basic: Story = {
    render: (args) => <Table {...args} dataSource={dataSource} columns={columns}/>,
};

export const NoData: Story = {
    render: (args) => <Table {...args} dataSource={[]} columns={columns}/>,
};

interface ExampleData {
    name: string;
    age: number;
    gamePass: {
        enabled: boolean;
    };
}

const dataSource: ExampleData[] = [
    {
        name: 'Tom',
        age: 27,
        gamePass: {
            enabled: true,
        },
    },
    {
        name: 'Jerry',
        age: 22,
        gamePass: {
            enabled: false,
        },
    },
];

const columns: Array<ColumnType<ExampleData>> = [
    {
        title: 'name',
        dataIndex: 'name',
    },
    {
        title: 'age',
        dataIndex: 'age',
    },
    {
        title: 'game pass',
        dataIndex: 'gamePass',
        render: (value) => value.enabled === true ? 'yes' : 'no',
    },
];
