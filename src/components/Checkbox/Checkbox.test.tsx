import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Checkbox, type CheckboxProps } from './Checkbox';

describe('Checkbox', () => {
    const onChangeMock = jest.fn();

    const renderCheckbox = (props: CheckboxProps) => {
        return render(<Checkbox {...props} />);
    };

    it('should render correct', () => {
        const { container } = renderCheckbox({
            checked: true,
            name: 'checkbox',
            label: 'checkbox',
            onChange: onChangeMock,
        });

        expect(container.firstChild).toMatchSnapshot();
    });

    it('should invoke onChange when change event fired', () => {
        renderCheckbox({
            checked: true,
            name: 'checkbox',
            label: 'checkbox',
            onChange: onChangeMock,
        });

        fireEvent.click(screen.getByLabelText('checkbox'));

        expect(onChangeMock).toHaveBeenCalledTimes(1);
    });
});
