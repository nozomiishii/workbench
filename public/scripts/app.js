console.log('app');

// var template = <p>this is jsx from app.js</p>
var template = React.createElement("p", {
  class: "react"
}, "🦕");
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
