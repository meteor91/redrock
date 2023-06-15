import React from 'react';
import { type ColumnType, type GetRowKey } from './interfaces';
import style from './Table.module.less';
import { BodyRow } from './components/BodyRow';

export interface TableProps<RecordType> {
    dataSource: RecordType[];
    columns: Array<ColumnType<RecordType>>;
    rowKey?: string | keyof RecordType | GetRowKey<RecordType>;
}

// eslint-disable-next-line @typescript-eslint/comma-dangle
export const Table = <T, >(props: TableProps<T>): React.ReactElement => {
    const { columns, dataSource } = props;
    return (
        <table className={style.table}>
            <thead className={style.thead}>
                <tr className={style.tr}>
                    {columns.map((column: ColumnType<T>) => {
                        return (
                            <th key={column.dataIndex as string} className={style.cell}>
                                {column.title}
                            </th>
                        );
                    })}
                </tr>
            </thead>
            <tbody className={style.tbody}>
                {dataSource.map((rowData: T, index) => {
                    return <BodyRow key={index} rowData={rowData} columns={columns} />;
                })}
            </tbody>
        </table>
    );
};
