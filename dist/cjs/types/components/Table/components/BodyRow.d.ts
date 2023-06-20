import { type ColumnType, type RowKey } from '../interfaces';
import React from 'react';
interface BodyRowProps<T> {
    rowData: T;
    columns: Array<ColumnType<T>>;
    rowKey?: RowKey<T>;
}
export declare const BodyRow: <T>(props: BodyRowProps<T>) => React.ReactElement;
export {};
