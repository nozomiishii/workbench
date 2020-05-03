import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const name = "nozomi";
  const date = new Date();

  let n = 100;
  const customStyle = {
    width: n + "px",
    height: "100px",
  };

  return (
    <div>
      <h1>Hello {name}</h1>
      <p>©{date.getFullYear()}</p>
      <div>
        <img
          style={customStyle}
          src="https://picsum.photos/200"
          alt=""
          crossOrigin="anonymous"
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
