import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { getUser } from './getUser';

jest.mock('./getUser.ts');
// const mockGetUser = mocked(getUser, true);

beforeEach(() => render(<App />));
afterEach(cleanup);

test('should render the app component', () => {
  screen.debug();
});

test('should select the children that is being passed to the CustomInput component', () => {
  screen.getByText('input:');
  expect(screen.getByText('input:')).toBeInTheDocument();
});

test('should select the children that is being passed to the CustomInput component', () => {
  screen.getByRole('textbox');
});

test('should select a label element by its text', () => {
  screen.getByLabelText('input:');
});

test('should select the input element by its role with queryByRole', () => {
  const res = screen.queryByRole('in');
  console.log('🚀 ~ file: App.test.tsx ~ line 28 ~ test ~ res', res);
});
