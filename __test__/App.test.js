import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from './App';

describe('Todo App', () => {
  test('Adding todo', async () => {
    const { getByPlaceholderText, getByText } = render(<App />);

    const input = getByPlaceholderText('Yeni yapılacak ekle...');
    const addButton = getByText('Ekle');

    fireEvent.changeText(input, 'Test Todo');
    fireEvent.press(addButton);

    const todoItem = getByText('Test Todo');
    expect(todoItem).toBeDefined();
  });

  test('Toggling todo', async () => {
    const { getByText, getByTestId } = render(<App />);

    const input = getByText('Test Todo');
    fireEvent.press(input);

    const checkbox = getByTestId('checkbox');
    expect(checkbox.props.name).toBe('checkcircle');
  });

  test('Deleting todo', async () => {
    const { getByText, queryByText } = render(<App />);

    const input = getByText('Test Todo');
    fireEvent.press(input);

    const deleteButton = getByText('X');
    fireEvent.press(deleteButton);

    expect(queryByText('Test Todo')).toBeNull();
  });
});
