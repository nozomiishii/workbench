import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CardSection, Card, Input, Button, Spinner} from './common';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';

const LoginForm = (props) => {
  console.log(props.emailChanged);
  const onEmailChange = (text) => {
    props.emailChanged(text);
  };
  const onPasswordChange = (text) => {
    props.passwordChanged(text);
  };
  const onButtonPress = () => {
    const {email, password} = props;
    props.loginUser({email, password});
  };
  const renderError = () => {
    if (props.error) {
      return (
        <View>
          <Text style={styles.error}>{props.error}</Text>
        </View>
      );
    }
  };

  const renderButton = () => {
    if (props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <CardSection>
        <Button onPress={onButtonPress}>Login</Button>
      </CardSection>
    );
  };
  return (
    <Card>
      <CardSection>
        <Input
          label="Email"
          placeholder="email@gmail.com"
          onChangeText={onEmailChange}
          value={props.email}
        />
      </CardSection>
      <CardSection>
        <Input
          secureTextEntry
          label="password"
          placeholder="password"
          onChangeText={onPasswordChange}
          value={props.password}
        />
      </CardSection>
      {renderError()}
      {renderButton()}
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    auth: state.auth.auth,
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(LoginForm);

const styles = StyleSheet.create({
  error: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
});
