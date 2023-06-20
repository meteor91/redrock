import { type ColumnType, type DataIndex } from '../interfaces';
import type React from 'react';
export declare function renderCell<RecordType>(record: RecordType, renderIndex: number, dataIndex?: DataIndex, render?: ColumnType<RecordType>['render']): React.ReactNode;
