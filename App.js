import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [progresses, setProgresses] = useState({});

  const addTodo = () => {
    if (text.trim() !== '') {
      const newTodo = {
        id: Math.random().toString(),
        name: text,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setText('');
      setProgresses({...progresses, [newTodo.id]: 0});
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    const newProgresses = {...progresses};
    delete newProgresses[id];
    setProgresses(newProgresses);
  };

  const updateProgress = (id, value) => {
    setProgresses({...progresses, [id]: value});
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.taskRow}>
        <TouchableOpacity onPress={() => toggleTodo(item.id)}>
          <AntDesign
            name={item.completed ? 'checkcircle' : 'checkcircleo'}
            size={24}
            color={item.completed ? '#1DA1F2' : '#aaa'}
            style={styles.checkbox}
          />
        </TouchableOpacity>
        <Text style={[styles.text, item.completed && styles.completed]}>
          {item.name}
        </Text>
        <TouchableOpacity onPress={() => deleteTodo(item.id)}>
          <AntDesign name="delete" size={24} color="#E0245E" style={styles.deleteIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.progressContainer}>
        <TextInput
          style={styles.progressInput}
          placeholder="0-100"
          value={progresses[item.id] ? progresses[item.id].toString() : ''}
          onChangeText={(value) => updateProgress(item.id, parseInt(value))}
          keyboardType="numeric"
          maxLength={3}
        />
        <ProgressBar
          progress={(progresses[item.id] || 0) / 100}
          color="#1DA1F2"
          style={styles.progress}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TODO APP</Text>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Yeni yapılacak ekle..."
          value={text}
          onChangeText={setText}
          onSubmitEditing={addTodo}
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity onPress={addTodo}>
          <AntDesign name="pluscircle" size={32} color="#1DA1F2" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1E8ED',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1DA1F2',
    textAlign: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  list: {
    paddingHorizontal: 15,
  },
  item: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    flex: 1,
    fontSize: 18,
    color: '#000',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  checkbox: {
    marginRight: 10,
  },
  deleteIcon: {
    marginLeft: 'auto',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 35,
  },
  progressInput: {
    width: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 6,
    fontSize: 14,
    marginRight: 5,
    color: '#000',
  },
  progress: {
    height: 10,
    width: 150,
    borderRadius: 5,
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#000',
    marginRight: 10,
    paddingVertical: 8,
  },
});

export default App;
