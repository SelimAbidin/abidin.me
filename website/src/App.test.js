import React from 'react';
import { render } from '@testing-library/react';
import {App} from './App.jsx';

test('renders <App />', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Y. Selim/i);
  expect(linkElement).toBeInTheDocument();
});
