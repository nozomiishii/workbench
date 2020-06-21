import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'friend #1', age: '30' },
    { name: 'friend #2', age: '30' },
    { name: 'friend #3', age: '30' },
    { name: 'friend #4', age: '30' },
    { name: 'friend #5', age: '30' },
    { name: 'friend #6', age: '30' },
    { name: 'friend #7', age: '30' },
    { name: 'friend #8', age: '30' },
    { name: 'friend #9', age: '30' },
  ];
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(friends) => friends.name}
      data={friends}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>
          {item.name} - Age {item.age}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
