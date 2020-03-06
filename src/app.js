class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOptions = this.handleAddOptions.bind(this);
    this.makeDicision = this.makeDicision.bind(this);
    this.state = {
      options: props.options
    };
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  makeDicision() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
  }

  handleAddOptions(option) {
    console.log(option);
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "this option already exists";
    }
    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      };
    });
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
        />
        <AddOption handleAddOptions={this.handleAddOptions} />
      </div>
    );
  }
}
IndecisionApp.defaultProps = {
  options: ["doggy", "anal", "threesome"]
};

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};
Header.defaultProps = {
  title: "Horny slut"
};

const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.makeDicision}>
        What should I do?
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      Options component here
      {props.options.map(option => (
        <Option key={option} optionText={option} />
      ))}
      <button onClick={props.handleDeleteOptions}>reset</button>
    </div>
  );
};

const Option = props => {
  return <div>{props.optionText}</div>;
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOptions(option);
    this.setState(() => {
      return { error };
    });
    e.target.elements.option.value = "";
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button type="submit">Add</button>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}
ReactDOM.render(
  <IndecisionApp options={["dripping wet"]} />,
  document.getElementById("app")
);
