import React from "react";
import { DropDown } from "./DropDown/DropDown";

function App() {
  return (
    <div className="App">
      <h1>ts-react</h1>
      <DropDown>
        <DropDown.Toggle>Toggle</DropDown.Toggle>
        <DropDown.List>
          <DropDown.Item>Item</DropDown.Item>
          <DropDown.Item>Item</DropDown.Item>
          <DropDown.Item>Item</DropDown.Item>
          <DropDown.Item>Item</DropDown.Item>
        </DropDown.List>
      </DropDown>
    </div>
  );
}

export default App;
