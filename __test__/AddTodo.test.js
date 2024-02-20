import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AddTodo from './AddTodo';

describe('AddTodo Component', () => {
  test('Adding todo', async () => {
    const mockAddTodo = jest.fn();
    const { getByPlaceholderText, getByText } = render(<AddTodo onAdd={mockAddTodo} />);

    const input = getByPlaceholderText('Yeni yapılacak ekle...');
    fireEvent.changeText(input, 'Test Todo');
    fireEvent.press(getByText('Ekle'));

    expect(mockAddTodo).toHaveBeenCalledWith('Test Todo');
  });
});
