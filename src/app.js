import React from "react";
import ReactDOM from "react-dom";
import AddOption from "./components/AddOption";
import Option from "./components/Option";
import Header from "./components/Header";
import Action from "./components/Action";

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOptions = this.handleAddOptions.bind(this);
    this.makeDicision = this.makeDicision.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    };
  }

  componentDidMount() {
    try {
      console.log("componentDidMount");
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      console.log("componentDidUpdate");
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  }
  makeDicision() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
  }

  handleAddOptions(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "this option already exists";
    }
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  }

  render() {
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          makeDicision={this.makeDicision}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOptions={this.handleAddOptions} />
      </div>
    );
  }
}
IndecisionApp.defaultProps = {
  options: ["pussy", "dick", "threesome"]
};

const Options = props => {
  return (
    <div>
      {props.options.length === 0 && (
        <p>Please add an option to get started!!</p>
      )}
      Options component here
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
      <button onClick={props.handleDeleteOptions}>reset</button>
    </div>
  );
};

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
