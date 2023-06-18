import React from 'react';
import { render, screen } from '@testing-library/react';
import { Spin } from './Spin';

describe('Spin', () => {
    it('should render correct', () => {
        const { container } = render(
            <Spin spinning={true}>content</Spin>,
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    it('spin spinning', () => {
        const { rerender } = render(
            <Spin spinning={true}>content</Spin>,
        );
        expect(screen.getByTestId('spinner')).toBeInTheDocument();
        rerender(<Spin spinning={false}>content</Spin>);
        expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
        expect(screen.getByTestId('spin-content')).toHaveTextContent('content');
    });
});
