console.log("app");

const book = {
  title: "sex is not jerkoff",
  round: 3,
  subtitle: "lick or lick more",
  options: ["header", "more header"]
};

const displayOptions = () => {
  if (book.options) {
    const options = book.options.map(option => {
      <p>{option}</p>;
    });
    console.log(options);
    return options;
  }
};

var template = (
  <div>
    <h1>{book.title}</h1>
    {book.subtitle ? <p>{book.subtitle}</p> : undefined}
    {displayOptions()}
  </div>
);

const intro = (
  <div>
    <h1>nozomi ishii</h1>
    <p>age: 28</p>
    <p>location: tokyo</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
// ReactDOM.render(intro, appRoot);
