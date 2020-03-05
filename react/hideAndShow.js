const root = document.getElementById('app');

let visibilty = true;

const toggleVisibilty = () => {
  console.log(visibilty);
  visibilty = !visibilty;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Hide and show</h1>
      <button onClick={toggleVisibilty}>{visibilty ? 'show' : 'hide'}</button>
    </div>
  );
  ReactDOM.render(template, root);
};

render();
