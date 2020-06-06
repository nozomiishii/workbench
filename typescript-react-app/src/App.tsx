import React, { useState } from "react";
import "./App.css";

interface HelloProps {
  increment?: () => void;
}
const Hello: React.FC<HelloProps> = ({ increment }) => {
  return <button onClick={increment}>Hello</button>;
};

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Hello increment={() => setCount(count + 1)} />
      <div>count: {count}</div>
    </div>
  );
};

export default App;
