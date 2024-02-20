import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// TodoItem bileşeni, bir görevin görünümünü oluşturur ve kullanıcının bu görevi tamamlama veya silme işlemlerini yönetir.
const TodoItem = ({ item, onToggle, onDelete }) => {
  return (
    // Her bir görev için bir View bileşeni oluşturulur.
    <View style={styles.container}>
      {/* Göreve tıklanınca tamamlama işlemini gerçekleştiren TouchableOpacity bileşeni */}
      <TouchableOpacity onPress={() => onToggle(item.id)}>
        {/* Görevin adını gösteren Text bileşeni. Eğer görev tamamlanmışsa stil değişikliği uygulanır. */}
        <Text style={[styles.itemText, item.completed && styles.completed]}>
          {item.name}
        </Text>
      </TouchableOpacity>
      {/* Görevi silmek için kullanılan TouchableOpacity bileşeni */}
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        {/* Silme işlemini temsil eden "X" harfi */}
        <Text style={styles.deleteButton}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

// Stil tanımlamaları StyleSheet.create kullanılarak yapılır. Bu, bileşenin görünümünü düzenler.
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  deleteButton: {
    color: 'red',
    fontSize: 18,
  },
});

// TodoItem bileşeni dışa aktarılır ve diğer bileşenler tarafından kullanılabilir hale gelir.
export default TodoItem;
