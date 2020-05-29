import React, { useEffect, useRef } from "react";
import Input from "./components/Input";

const App = () => {
  const firstNameEl = useRef(null);
  const lastNameEl = useRef(null);
  const submitEl = useRef(null);

  useEffect(() => {
    firstNameEl.current.focus();
  }, []);

  const firstKeyDown = (e) => {
    if (e.key === "Enter") {
      lastNameEl.current.focus();
    }
  };
  const lastKeyDown = (e) => {
    if (e.key === "Enter") {
      submitEl.current.focus();
    }
  };
  const submitKeyDown = (e) => {
    if (e.key === "Enter") {
      alert("form submitted");
    }
  };
  return (
    <div>
      <h1>React!</h1>
      <Input
        ref={firstNameEl}
        onKeyDown={firstKeyDown}
        type="text"
        placeholder="first name"
      />
      <Input
        ref={lastNameEl}
        onKeyDown={lastKeyDown}
        type="text"
        placeholder="last name"
      />
      <button ref={submitEl} onKeyDown={submitKeyDown}>
        Submit
      </button>
    </div>
  );
};

export default App;
