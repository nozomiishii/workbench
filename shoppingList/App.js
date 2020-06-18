import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Header from './components/Header';
// const Div = styled(View)`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
// `;

const App = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/women/10.jpg'}}
          style={styles.img}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'darkslateblue',
    fontSize: 30,
  },
  img: {
    width: 100,
    height: 100,
  },
});
export default App;
