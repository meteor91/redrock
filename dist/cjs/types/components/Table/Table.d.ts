import React from 'react';
import { type ColumnType, type RowKey } from './interfaces';
export interface TableProps<RecordType> {
    dataSource: RecordType[];
    columns: Array<ColumnType<RecordType>>;
    rowKey?: RowKey<RecordType>;
    loading?: boolean;
    emptyText?: string;
}
export declare const Table: <T>(props: TableProps<T>) => React.ReactElement;
