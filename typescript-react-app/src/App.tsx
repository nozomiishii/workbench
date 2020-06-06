import React, { useLayoutEffect, useRef } from "react";
import "./App.css";

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  useLayoutEffect(() => {
    console.log(inputRef.current?.getBoundingClientRect());
  }, []);
  return (
    <div className="App">
      <h1>hello</h1>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default App;
