import React from "react";
import { CustomForm } from "./components/Form";

function App() {
  return (
    <div className="App">
      <h1>form</h1>
      <CustomForm onSubmit={() => console.log("work")} />
    </div>
  );
}

export default App;
