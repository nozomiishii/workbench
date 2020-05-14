import React from "react";
import Accordion from "./Accordion";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Accordion preview="Click me for fun!">
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
