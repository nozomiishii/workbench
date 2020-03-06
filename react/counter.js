class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
      name: "dick"
    };
  }
  handleAddOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>counter: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
// let count = 0;

// const add = () => {
//   count++;
//   console.log('adding');
//   renderCounterApp();
// };
// const minus = () => {
//   count--;
//   console.log('subtracting');
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   console.log('reset');
//   renderCounterApp();
// };

// const root = document.getElementById('app');

// const renderCounterApp = () => {
//   const template = (
//     <div>
//       <h1>count: {count}</h1>
//       <button onClick={add}>+1</button>
//       <button onClick={minus}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(template, root);
// };

// renderCounterApp();
