import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

interface P {
  onSubmit: (title: string | undefined, content: string | undefined) => void;
  initialValue?: { title: string; content: string };
}

const BlogPostForm: React.FC<P> = ({ onSubmit, initialValue }) => {
  const [title, setTitle] = useState(initialValue?.title);
  const [content, setContent] = useState(initialValue?.content);
  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title='Save Blog Post' onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValue: {
    title: '',
    content: '',
  },
};

export default BlogPostForm;

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
});
