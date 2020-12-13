import React, { useEffect, useState } from 'react';
import './App.css';
import { getUser, User } from './getUser';

function App() {
  const [text, setText] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    (async () => {
      const user = await getUser();
      setUser(user);
    })();
  }, []);

  return (
    <div>
      {user && <p>Username:{user.name}</p>}
      <CustomInput value={text} onChange={handleChange}>
        input:
      </CustomInput>
      <p>you typed: {text ? text : '...'}</p>
    </div>
  );
}

interface CustomInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ children, value, onChange }) => {
  return (
    <div>
      <label htmlFor='search'>{children}</label>
      <input id='search' type='text' value={value} onChange={onChange} />
    </div>
  );
};

export default App;
