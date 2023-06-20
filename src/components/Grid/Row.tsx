import React from 'react';

import style from './Grid.module.less';

interface RowProps {
    children?: React.ReactNode;
}

export const Row: React.FC<RowProps> = (props) => (
    <div className={style.row}>{props.children}</div>
);
