import type React from 'react';

export type DataIndex = string | number | ReadonlyArray<(string | number)>;

export interface ColumnType<RecordType> {
    title?: string;
    dataIndex?: keyof RecordType;
    // dataIndex?: DataIndex;
    // dataIndex: string | number;
    render?: (value: any, record?: RecordType, index?: number) => React.ReactNode;
}

export type GetRowKey<RecordType> = (record: RecordType, index?: number) => React.Key;
export type RowKey<RecordType> = string | keyof RecordType | GetRowKey<RecordType>;
export type DefaultRecordType = Record<string, any>;
