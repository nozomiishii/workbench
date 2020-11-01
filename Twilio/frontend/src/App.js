import React, { useEffect } from 'react';
import Login from './components/Login';
import { useImmer } from 'use-immer';
import axios from './utils/Axios';
import socket from './utils/SocketIo';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [user, setUser] = useImmer({
    username: 'nozomiishii',
    mobileNumber: '+817042200798',
    verificationCode: '',
    verificationSent: false,
  });

  const [storedValue, setStoredValue] = useLocalStorage('token', null);

  useEffect(() => {
    socket.on('disconnect', () => {
      console.log('socket connection disconnected');
    });
  }, []);

  async function sendSmsCode() {
    console.log('sending SMS');
    await axios.post('/login', {
      to: user.mobileNumber,
      username: user.username,
      channel: 'sms',
    });
    setUser((state) => ({ ...state, verificationSent: true }));
  }
  async function sendVericationCode() {
    console.log('sending verification');
    const res = await axios.post('/verify', {
      to: user.mobileNumber,
      code: user.verificationCode,
      username: user.username,
    });
    console.log('received token', res.data.token);
    setStoredValue(res.data.token);
  }
  return (
    <div>
      <Login
        user={user}
        setUser={setUser}
        sendSmsCode={sendSmsCode}
        sendVericationCode={sendVericationCode}
      />
    </div>
  );
}

export default App;
