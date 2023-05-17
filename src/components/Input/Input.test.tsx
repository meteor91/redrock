import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import {Input, InputProps} from './Input';

describe('Input', () => {
    const onChangeMock = jest.fn();

    const renderInput = (props: InputProps) => {
        return render(<Input {...props} />);
    };

    it('should render correct', () => {
        const {container} = renderInput({
            value: 'Test',
            placeholder: 'Enter text',
            error: true,
            onChange: onChangeMock,
        });

        expect(container.firstChild).toMatchSnapshot();
    });

    it('should invoke onChange when change event fired', () => {
        renderInput({onChange: onChangeMock, value: 'test'});

        fireEvent.change(screen.getByRole('textbox'), {target: {value: 'hello'}});

        expect(onChangeMock).toHaveBeenCalledTimes(1);
        expect(onChangeMock).toHaveBeenCalledWith(expect.anything());
    });

    it('should be disabled when disabled prop is true', () => {
        renderInput({disabled: true, value: 'test'});

        expect(screen.getByRole('textbox')).toBeDisabled();
    });

    //
    // it('should render with error styles when error prop is true', () => {
    //   const { getByPlaceholderText, container } = renderInput({
    //     error: true,
    //     placeholder: 'Enter text',
    //     onChange: onChangeMock,
    //   });
    //   const inputElement = getByPlaceholderText('Enter text') as HTMLInputElement;
    //
    //   expect(inputElement.classList.contains('input-error')).toBe(true);
    //   expect(container.firstChild).toMatchSnapshot();
    // });


    // covered with snapshot
    // it('should render with the correct initial value', () => {
    //     const inputValue = 'Hello';
    //
    //     renderInput({value: inputValue, onChange: onChangeMock});
    //
    //     expect(screen.getByDisplayValue(inputValue)).toBeInTheDocument();
    // });
    //
    // it('should display placeholder', () => {
    //     const placeholder = 'Username';
    //
    //     renderInput({placeholder});
    //
    //     expect(screen.getByPlaceholderText(placeholder));
    // });
});
