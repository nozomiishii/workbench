import React, { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;
const initialState = {
  red: 0,
  green: 0,
  blue: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'red':
      if (state.red + action.amount > 255 || state.red + action.amount < 0) {
        return state;
      }
      return { ...state, red: state.red + action.amount };
    case 'green':
      if (
        state.green + action.amount > 255 ||
        state.green + action.amount < 0
      ) {
        return state;
      }
      return { ...state, green: state.green + action.amount };
    case 'blue':
      if (state.blue + action.amount > 255 || state.blue + action.amount < 0) {
        return state;
      }
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};
const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { red, blue, green } = state;

  return (
    <View>
      <ColorCounter
        color='Red'
        onIncrease={() => dispatch({ type: 'red', amount: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: 'red', amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color='Green'
        onIncrease={() => dispatch({ type: 'green', amount: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: 'green', amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color='Blue'
        onIncrease={() => dispatch({ type: 'blue', amount: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: 'blue', amount: -1 * COLOR_INCREMENT })
        }
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;

const styles = StyleSheet.create({});
