const app = {
  title: "Studing Coding",
  subtitle: "p5.js and React are awesome",
  options: ["one", "two"]
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  console.log(option);
  if (option) {
    app.options.push(option);
    console.log(app.options);
    e.target.elements.option.value = "";
  }
  renderApp();
};

const resetOptions = () => {
  app.options = [];
  renderApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      <h1>List</h1>
      {app.options.map(opt => (
        <p key={opt}>{opt}</p>
      ))}

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
      <button disabled={app.options === 0} onClick={onMakeDecision}>
        Random!!!
      </button>
      <button onClick={resetOptions}>reset</button>
    </div>
  );
  ReactDOM.render(template, root);
};

const root = document.getElementById("app");

renderApp();
