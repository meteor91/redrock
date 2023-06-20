import React from 'react';

import style from './Grid.module.less';

interface ColProps {
    children?: React.ReactNode;
    span: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;
}

export const Col: React.FC<ColProps> = (props) => (
    <div className={style[`col-${props.span}`]}>
        {props.children}
    </div>
);
