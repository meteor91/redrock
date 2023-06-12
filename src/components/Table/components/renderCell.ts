import { type ColumnType, type DataIndex } from '../interfaces';
import type React from 'react';
import getValue from '../../../utils/getValue';

export function renderCell<RecordType> (
    record: RecordType,
    renderIndex: number,
    dataIndex?: DataIndex,
    render?: ColumnType<RecordType>['render'],
): React.ReactNode {
    const path =
        dataIndex === null || dataIndex === undefined || dataIndex === ''
            ? []
            : Array.isArray(dataIndex)
                ? dataIndex
                : [dataIndex];
    const value: React.ReactNode = getValue(record, path);
    let returnNode = value;
    if (render) {
        returnNode = render(value, record, renderIndex);
    }

    return returnNode;
}
