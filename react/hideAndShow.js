class HideAndShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleVisibilty = this.handleVisibilty.bind(this);
    this.state = {
      visibilty: false
    };
  }
  handleVisibilty() {
    this.setState(prevState => {
      return {
        visibilty: !prevState.visibilty
      };
    });
  }
  render() {
    return (
      <div>
        <h1>react</h1>
        <button onClick={this.handleVisibilty}>
          {this.state.visibilty ? "show" : "hide"}
        </button>
        {this.state.visibilty && (
          <div>
            <h1>sex??</h1>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<HideAndShow />, document.getElementById("app"));

// const root = document.getElementById("app");

// let visibilty = true;

// const toggleVisibilty = () => {
//   console.log(visibilty);
//   visibilty = !visibilty;
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>Hide and show</h1>
//       <button onClick={toggleVisibilty}>{visibilty ? "show" : "hide"}</button>
//     </div>
//   );
//   ReactDOM.render(template, root);
// };

// render();
