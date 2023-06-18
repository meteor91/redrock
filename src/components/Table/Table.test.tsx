import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from './Table';
import { type ColumnType } from './interfaces';

interface Data {
    name: string;
    age: number;
    gamePass: {
        enabled: boolean;
    };
}

describe('Table', () => {
    const dataSource: Data[] = [
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

    const columns: Array<ColumnType<Data>> = [
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
            render: (value: any) => value.enabled === true ? 'yes' : 'no',
        },
    ];

    it('should render correct', () => {
        const { container } = render(
            <Table dataSource={dataSource} columns={columns}/>,
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    it('table loading', () => {
        const { rerender } = render(
            <Table dataSource={[]} columns={columns} loading={true}/>,
        );
        expect(screen.getByTestId('spinner')).toBeInTheDocument();
        rerender(<Table dataSource={[]} columns={columns} loading={false}/>);
        expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
    });

    it('display no data', () => {
        render(
            <Table dataSource={[]} columns={columns} emptyText={'no data text'}/>,
        );
        expect(screen.getByText('no data text')).toBeInTheDocument();
    });
});
