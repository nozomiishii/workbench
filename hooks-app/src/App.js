import React, { useEffect, useState, useRef } from "react";
import { useForm } from "./useForm";
import { useFetch } from "./useFetch";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("render");
    return () => {
      console.log("clean up");
    };
  }, []);

  const { data } = useFetch(`http://numbersapi.com/${count}/trivia`);
  const inputRef = useRef();

  return (
    <div>
      <div>{!data ? "loading..." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount((s) => s + 1)}>+</button>
      <input
        type="text"
        name="email"
        value={values.email}
        onChange={handleChange}
        ref={inputRef}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        focus
      </button>
    </div>
  );
};

export default App;
