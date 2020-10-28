import React from 'react';
import { Grid, Header, Form, Segment, Button } from 'semantic-ui-react';

function Login({
  user: { username, mobileNumber, verificationCode, verificationSent },
  setUser,
  sendSmsCode,
  sendVericationCode,
}) {
  function populateFilds(e, data) {
    setUser((state) => ({ ...state, [data.name]: data.value }));
  }
  return (
    <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh' }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header>Login into your account</Header>
        <Form>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='username'
              value={username}
              onChange={(e, data) => populateFilds(e, data)}
              name='username'
            />
            <Form.Input
              fluid
              icon='mobile'
              iconPosition='left'
              placeholder='mobile number'
              value={mobileNumber}
              onChange={(e, data) => populateFilds(e, data)}
              name='mobileNumber'
            />
            {verificationSent && (
              <Form.Input
                fluid
                icon='key'
                iconPosition='left'
                placeholder='enter your code'
                value={verificationCode}
                onChange={(e, data) => populateFilds(e, data)}
                name='verificationCode'
              />
            )}

            <Button
              fluid
              onClick={!verificationSent ? sendSmsCode : sendVericationCode}
            >
              {!verificationSent ? 'Login' : 'enter code'}
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default Login;
