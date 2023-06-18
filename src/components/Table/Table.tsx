import React from 'react';
import { type ColumnType, type RowKey } from './interfaces';
import style from './Table.module.less';
import { BodyRow } from './components/BodyRow';
import { Spin } from '../Spin';

export interface TableProps<RecordType> {
    dataSource: RecordType[];
    columns: Array<ColumnType<RecordType>>;
    rowKey?: RowKey<RecordType>;
    loading?: boolean;
    emptyText?: string;
}

// eslint-disable-next-line @typescript-eslint/comma-dangle
export const Table = <T, >(props: TableProps<T>): React.ReactElement => {
    const {
        columns,
        dataSource,
        rowKey,
        emptyText,
        loading,
    } = props;
    return (
        <div>
            <Spin spinning={loading}>
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
                        {dataSource?.length > 0
                            ? (dataSource.map((rowData: T, index) => {
                                return <BodyRow key={index} rowData={rowData} columns={columns} rowKey={rowKey} />;
                            }))
                            : (
                                <tr className={style.tr}>
                                    <td className={style.cell} colSpan={columns.length}>
                                        <div className={style.noData}>
                                            {emptyText ?? 'no data'}
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </Spin>
        </div>
    );
};
