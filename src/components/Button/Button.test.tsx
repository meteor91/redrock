import React from "react";
import { render, fireEvent } from "@testing-library/react";

import {Button} from "./Button";

describe("Button", () => {
  it('should render correctly', () => {
    const { container } = render(<Button label="test" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly disabled state', () => {
    const { container } = render(<Button label="test" disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call onClick only once when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button label="test" onClick={onClickMock}/>);
    const button = getByText('test');

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});