import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }: any) => {
  const { state } = useContext(Context);
  console.log(navigation.getParam('id'));

  const blogPost = state.find(
    (blogPost: any) => blogPost.id === navigation.getParam('id')
  );
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }: any) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Edit', { id: navigation.getParam('id') });
        }}
      >
        <EvilIcons name='pencil' size={30} />
      </TouchableOpacity>
    ),
  };
};

export default ShowScreen;

const styles = StyleSheet.create({});
