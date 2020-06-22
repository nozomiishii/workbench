import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const initialState = {
  count: 0,
};

const COUNT = 1;

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'PULS':
      return {
        ...state,
        count: state.count + action.payload,
      };
    case 'MINUS':
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};
const CounterScreen = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const { count } = state;
  return (
    <View>
      <Text>counter: {count}</Text>
      <Button
        title='+'
        onPress={() => dispatch({ type: 'PULS', payload: COUNT })}
      />
      <Button
        title='-'
        onPress={() => dispatch({ type: 'MINUS', payload: COUNT })}
      />
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
