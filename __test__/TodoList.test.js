import React from 'react';
import { render } from '@testing-library/react-native';
import TodoList from './TodoList';

describe('TodoList Component', () => {
  test('Rendering todo list', async () => {
    const mockTodos = [
      { id: 1, name: 'Test Todo 1', completed: false },
      { id: 2, name: 'Test Todo 2', completed: true }
    ];
    const { getByText } = render(<TodoList todos={mockTodos} />);

    expect(getByText('Test Todo 1')).toBeDefined();
    expect(getByText('Test Todo 2')).toBeDefined();
  });
});
