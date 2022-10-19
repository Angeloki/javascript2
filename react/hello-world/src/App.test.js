import { render, screen } from '@testing-library/react';
import Greet from './components/Greet';

test('renders Hello World', () => {
  render(<Greet />);
  const helloElement = screen.getByText(/Hello World/i);
  expect(helloElement).toBeInTheDocument();
});
