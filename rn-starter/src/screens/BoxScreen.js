import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoxScreen = () => {
  return (
    <>
      <View style={styles.header}>
        <Text>App</Text>
      </View>

      <View style={styles.viewStyle}>
        <View style={styles.textOne} />
        <View style={styles.textTwo} />
        <View style={styles.textThree} />
      </View>
    </>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 200,
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOne: {
    height: 100,
    width: 100,
    borderWidth: 3,
    backgroundColor: 'red',
  },
  textTwo: {
    height: 100,
    width: 100,
    borderWidth: 3,
    backgroundColor: 'green',
    alignSelf: 'flex-end',
  },
  textThree: {
    height: 100,
    width: 100,
    borderWidth: 3,
    backgroundColor: 'blue',
  },
});
