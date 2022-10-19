import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Greetings from './Greetings';

describe("Greeting component", () =>{
test('renders I love my kitty', () => {
    render(<Greetings />);
    const kittyElement = screen.getByText(/I love my kitty/i);
    expect(kittyElement).toBeInTheDocument();
  });
  test('renders Jasper if not clicked', () => {
    render(<Greetings />);

    const buttonElement = screen.getByRole(/button/i);
    userEvent.click(buttonElement);

    const outputElement = screen.getByText(/Jasper/i);
    expect(outputElement).toBeInTheDocument();
  });
  test('renders Kevin if clicked', () => {
    render(<Greetings />);

    const buttonElement = screen.getByRole(/button/i);
    userEvent.click(buttonElement);

    const ouputElement = screen.queryByText(/Kevin/i);
    expect(ouputElement).toBeNull();
  });
});