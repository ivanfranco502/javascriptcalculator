const Button = (props) =>
React.createElement("button", { id: props.id, className: `btn btn-outline-${props.type} col-${props.size}`, onClick: props.handleClick },
props.text);


class CalculatorApp extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      inputValue: "0",
      outputValue: "0" };


    this.handleClear = this.handleClear.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    // this.handleOperator = this.handleOperator.bind(this);
  }

  handleClear()
  {
    this.setState(
    {
      inputValue: "0",
      outputValue: "0" });


    event.preventDefault();
  }

  handleNumber(value)
  {
    this.setState(
    state => {
      if (state.inputValue === "0")
      {
        if (value === "0")
        return state;

        return {
          inputValue: value,
          outputValue: value };

      }
      return {
        inputValue: state.inputValue + value,
        outputValue: state.outputValue + value };

    });

    event.preventDefault();
  }

  handleOperator(value)
  {
    this.setState(
    state => {
      let last = state.inputValue.length - 1;
      let lastValue = state.inputValue[last];
      if (["/", "*", "+", "-"].includes(lastValue))
      {
        if (lastValue === "-" && value === "-")
        {
          let previousLast = last - 1;
          if (["/", "*", "+", "-"].includes(state.inputValue[previousLast]))
          {
            return {
              inputValue: state.inputValue.substring(0, previousLast) + value,
              outputValue: value };

          }

          return {
            inputValue: state.inputValue.substring(0, last) + value,
            outputValue: value };

        }
        if (value !== "-")
        {
          return {
            inputValue: state.inputValue.substring(0, last) + value,
            outputValue: value };

        }
        if (value === "-")
        {
          let previousLast = last - 1;
          if (["/", "*", "+", "-"].includes(state.inputValue[previousLast]))
          {
            return {
              inputValue: state.inputValue.substring(0, previousLast) + value,
              outputValue: value };

          }
        }
      }

      return {
        inputValue: state.inputValue + value,
        outputValue: value };

    });

    event.preventDefault();
  }

  handleEquals()
  {
    this.setState(state => ({ outputValue: eval(state.inputValue) }));
  }

  render() {
    return (
      React.createElement("div", { className: "container justify-content-center align-items-center" },
      React.createElement("div", { className: "row" },
      React.createElement("input", { id: "calc", className: "form-control col-12", value: this.state.inputValue })),

      React.createElement("div", { className: "row" },
      React.createElement("input", { id: "display", className: "form-control col-12", value: this.state.outputValue })),

      React.createElement("div", { className: "row" },
      React.createElement(Button, { id: "divide", type: "info", size: "2", text: "/", handleClick: () => this.handleOperator("/") }),
      React.createElement(Button, { id: "multiply", type: "info", size: "2", text: "*", handleClick: () => this.handleOperator("*") }),
      React.createElement(Button, { id: "add", type: "info", size: "2", text: "+", handleClick: () => this.handleOperator("+") }),
      React.createElement(Button, { id: "subtract", type: "info", size: "2", text: "-", handleClick: () => this.handleOperator("-") }),
      React.createElement(Button, { id: "clear", type: "info", size: "4", text: "CE", handleClick: this.handleClear })),

      React.createElement("div", { className: "row" },
      React.createElement(Button, { id: "one", type: "primary", size: "4", text: "1", handleClick: () => this.handleNumber("1") }),
      React.createElement(Button, { id: "two", type: "primary", size: "4", text: "2", handleClick: () => this.handleNumber("2") }),
      React.createElement(Button, { id: "three", type: "primary", size: "4", text: "3", handleClick: () => this.handleNumber("3") })),

      React.createElement("div", { className: "row" },
      React.createElement(Button, { id: "four", type: "primary", size: "4", text: "4", handleClick: () => this.handleNumber("4") }),
      React.createElement(Button, { id: "five", type: "primary", size: "4", text: "5", handleClick: () => this.handleNumber("5") }),
      React.createElement(Button, { id: "six", type: "primary", size: "4", text: "6", handleClick: () => this.handleNumber("6") })),

      React.createElement("div", { className: "row" },
      React.createElement(Button, { id: "seven", type: "primary", size: "4", text: "7", handleClick: () => this.handleNumber("7") }),
      React.createElement(Button, { id: "eight", type: "primary", size: "4", text: "8", handleClick: () => this.handleNumber("8") }),
      React.createElement(Button, { id: "nine", type: "primary", size: "4", text: "9", handleClick: () => this.handleNumber("9") })),

      React.createElement("div", { className: "row" },
      React.createElement(Button, { id: "decimal", type: "primary", size: "4", text: "." }),
      React.createElement(Button, { id: "zero", type: "primary", size: "4", text: "0", handleClick: () => this.handleNumber("0") }),
      React.createElement(Button, { id: "equals", type: "secondary", size: "4", text: "=" }))));



  }}


ReactDOM.render(React.createElement(CalculatorApp, null), document.getElementById("root"));