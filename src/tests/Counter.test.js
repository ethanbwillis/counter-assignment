// import necessary react testing library helpers here
import { render, fireEvent, screen } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter'

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above

  //checks that counter text is present in screen
  const counterMessage = screen.getByText('Counter');
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above

  //checks that counter displays as "0" on initialization
  const initialValue = screen.getByText('0');
  expect(initialValue).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above

  //keeps track of the value of the counter. clicks the plus/increment button 
  //and then checks that the text field for the counter accurately changes
  const countValue = screen.getByText('0');
  const incrementButton = screen.getByText('+');

  fireEvent.click(incrementButton);

  expect(countValue).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above

  //does the same as above, except checks for -1 and presses decrement button
  const countValue = screen.getByText('0');
  const decrementButton = screen.getByText('-');

  fireEvent.click(decrementButton);

  expect(countValue).toHaveTextContent('-1');
});
