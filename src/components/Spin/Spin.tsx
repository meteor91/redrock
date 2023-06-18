import React from 'react';
import clsx from 'clsx';

import style from './Spin.module.less';

export interface SpinProps {
    spinning?: boolean;
    children?: React.ReactNode;
}

export const Spin: React.FC<SpinProps> = (props) => {
    const { spinning } = props;
    return (
        <div className={style.spinNested}>
            {spinning && (
                <div className={clsx({ [style.spin]: spinning })} data-testid="spinner">
                    <div className={style.loader}/>
                </div>
            )}
            <div className={clsx({ [style.contentBlur]: spinning })} data-testid="spin-content">
                {props.children}
            </div>
        </div>
    );
};
