import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';

const App = () => {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyBJTh5bfOdJ0UdGhZDnF_aG1GEUw3wiDf4',
      authDomain: 'manager-dca9e.firebaseapp.com',
      databaseURL: 'https://manager-dca9e.firebaseio.com',
      projectId: 'manager-dca9e',
      storageBucket: 'manager-dca9e.appspot.com',
      messagingSenderId: '686447195934',
      appId: '1:686447195934:web:41653fc7f5f2f98589fb0f',
      measurementId: 'G-V99PPL9R48',
    };
    // Initialize Firebase

    firebase.initializeApp(firebaseConfig);
  }, []);
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <View style={styles.header} />
      <LoginForm />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: 'green',
  },
});
