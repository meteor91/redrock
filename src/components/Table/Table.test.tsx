import React from 'react';
import { render, type RenderResult } from '@testing-library/react';
import { Table, type TableProps } from './Table';

describe('Table', () => {
    const dataSource = [
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

    const columns = [
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

    const renderTable = (props: TableProps<any>): RenderResult => {
        return render(<Table dataSource={props.dataSource} columns={props.columns} />);
    };

    it('should render correct', () => {
        const { container } = renderTable({
            columns,
            dataSource,
        });

        expect(container.firstChild).toMatchSnapshot();
    });
});
