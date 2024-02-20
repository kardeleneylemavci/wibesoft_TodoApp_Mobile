import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

// AddTodo bileşeni, kullanıcıdan yeni bir görev girmesini sağlar ve bu görevi eklemek için bir fonksiyon alır.
const AddTodo = ({ onAdd }) => {
  // useState hook'u kullanılarak, text adında bir state oluşturulur. Bu, kullanıcının girdiği metni içerir.
  const [text, setText] = useState('');

  // handleAdd adında bir fonksiyon tanımlanır. Bu fonksiyon, "Ekle" butonuna basıldığında çağrılır ve yeni bir görev eklemeyi yönetir.
  const handleAdd = () => {
    // Girilen metnin boşluklar temizlenir ve ardından kontrol edilir. Eğer metin boş değilse, onAdd prop'u aracılığıyla bu metni ana uygulamaya iletilir ve text state'i temizlenir.
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  // Bileşen, bir View içinde TextInput ve Button bileşenlerini içerir. Kullanıcı yeni görevleri girerken TextInput, ekleme işlemi için de Button kullanılır.
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Yeni yapılacak ekle..."
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <Button title="Ekle" onPress={handleAdd} />
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
  input: {
    flex: 1,
    marginRight: 10,
    fontSize: 18,
  },
});

// AddTodo bileşeni dışa aktarılır ve diğer bileşenler tarafından kullanılabilir hale gelir.
export default AddTodo;
