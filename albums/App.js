import React from 'react';
import {Text} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
  return (
    <>
      <Header headerText="Albums " />
      <AlbumList />
      <Text>Some text</Text>
    </>
  );
};

export default App;
