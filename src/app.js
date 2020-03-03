const app = {
  title: "Studing Coding",
  subtitle: "p5.js and React are awesome",
  options: ["one", "two"]
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "here are your options" : "No options"}</p>
    <form>
      <input type="text" name="option" />
      <button>Add option</button>
    </form>
  </div>
);

const root = document.getElementById("app");
ReactDOM.render(template, root);
