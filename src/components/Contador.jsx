import React, { Component } from "react";

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: this.props.initialValue,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleIncrement() {
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  
  handleDecrement = () => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  handleReset() {
    this.setState({
      contador: this.props.initialValue,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleDecrement}>Decrementar</button>
        <span>{this.state.contador}</span>
        <button onClick={this.handleIncrement}>Incrementar</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Contador;
