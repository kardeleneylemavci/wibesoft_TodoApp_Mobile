import React from 'react';
import { View, FlatList } from 'react-native';
import TodoItem from './TodoItem';

// TodoList bileşeni, bir todo listesini görüntüler.
const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <View>
      {/* FlatList bileşeni, verilen todo listesini render eder. */}
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          // Her bir todo öğesi için TodoItem bileşeni oluşturulur.
          <TodoItem
            item={item}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default TodoList;
