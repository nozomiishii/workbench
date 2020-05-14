import React from "react";
import Accordion from "./Accordion";
import "./App.css";

const Greeting = ({ name }: { name: string }) => (
  <h1>Hello to you {name}!!!</h1>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="nozomi" />
        <Accordion preview={<h1>banana!</h1>}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          deleniti molestiae, quibusdam ullam necessitatibus nisi aperiam
          molestias perspiciatis rerum vel laudantium vero eius sed. Facilis
          magni sed esse possimus dolores.
        </Accordion>
      </header>
    </div>
  );
}

export default App;
