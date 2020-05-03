import React from "react";
import Heading from "./components/Heading";

const App = () => {
  const name = "nozomi";
  const date = new Date();

  const customStyle = {
    color: "blue",
  };

  let hey;
  if (date.getHours() > 18) {
    customStyle.color = "red";
    hey = "good afternoon";
  } else if (date.getHours() > 12) {
    customStyle.color = "green";
    hey = "hello heloo";
  } else {
    customStyle.color = "blue";
    hey = "morning";
  }

  return (
    <div>
      <Heading name={name} hey={hey} customStyle={customStyle} />
      <p>©{date.getFullYear()}</p>
      <div>
        <img src="https://picsum.photos/200" alt="" crossOrigin="anonymous" />
      </div>
    </div>
  );
};

export default App;
