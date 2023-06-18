import { type ColumnType, type RowKey } from '../interfaces';
import React from 'react';
import style from '../Table.module.less';

interface BodyRowProps<T> {
    rowData: T;
    columns: Array<ColumnType<T>>;
    rowKey?: RowKey<T>;
}

// eslint-disable-next-line @typescript-eslint/comma-dangle
export const BodyRow = <T, >(props: BodyRowProps<T>): React.ReactElement => {
    const { rowData, columns } = props;
    return (
        <tr className={style.tr}>
            {columns.map((column: ColumnType<T>, index) => {
                // const childNode: React.ReactNode = rowData[column.dataIndex] as string;
                const { dataIndex, render } = column;

                // const path =
                //     dataIndex === null || dataIndex === undefined || dataIndex === ''
                //         ? []
                //         : Array.isArray(dataIndex)
                //             ? dataIndex
                //             : [dataIndex];
                // const childNode: React.ReactNode = getValue(rowData, path);
                let content: string | React.ReactNode = '';
                // if (dataIndex && rowData.hasOwnProperty(dataIndex)) {
                if (dataIndex) {
                    content = render
                        ? render(rowData[dataIndex], rowData, index)
                        : rowData[dataIndex] as string;
                } else if (render) {
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    content = render(rowData[dataIndex!], rowData, index);
                }
                return (
                    <td key={index} className={style.cell}>
                        {/* {childNode} */}
                        {/* {renderCell(rowData, index, dataIndex, render)} */}
                        {content}
                    </td>
                );
            })}
        </tr>
    );
};
