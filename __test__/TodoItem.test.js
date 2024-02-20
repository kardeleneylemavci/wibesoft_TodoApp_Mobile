import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TodoItem from './TodoItem';

describe('TodoItem Component', () => {
  test('Toggling todo', async () => {
    const mockToggleTodo = jest.fn();
    const { getByText } = render(<TodoItem item={{ id: 1, name: 'Test Todo', completed: false }} onToggle={mockToggleTodo} />);

    fireEvent.press(getByText('Test Todo'));

    expect(mockToggleTodo).toHaveBeenCalledWith(1);
  });

  test('Deleting todo', async () => {
    const mockDeleteTodo = jest.fn();
    const { getByText } = render(<TodoItem item={{ id: 1, name: 'Test Todo', completed: false }} onDelete={mockDeleteTodo} />);

    fireEvent.press(getByText('X'));

    expect(mockDeleteTodo).toHaveBeenCalledWith(1);
  });
});
