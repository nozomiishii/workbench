let count = 0;

const add = () => {
  count++;
  console.log("adding");
  renderCounterApp();
};
const minus = () => {
  count--;
  console.log("subtracting");
  renderCounterApp();
};
const reset = () => {
  count = 0;
  console.log("reset");
  renderCounterApp();
};

const root = document.getElementById("app");

const renderCounterApp = () => {
  const template = (
    <div>
      <h1>count: {count}</h1>
      <button onClick={add}>+1</button>
      <button onClick={minus}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(template, root);
};

renderCounterApp();
