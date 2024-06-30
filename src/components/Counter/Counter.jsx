import React from "react";
import "./Counter.css";
import Controls from "./Controls";
import Value from "./Value";

class Counter extends React.Component {
  // стартовое дефолтное значение счетчика, то есть если стартовое не передали:

  static defaultProps = {
    initialValue: 0,
  };

  //   static propType = {
  //     Описываем проп тайпы
  //   };

  //   constructor() {
  //     super();
  //     this.state = {
  //       value: 0,
  //     };
  //   }

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = (event) => {
    console.log("Клик увеличить");
    //   this.state.value=5 - так делать нельзя!!!
    // this.setState({ value: 10 }); - просто перезаписать предыдущее, не используя пред.значение в расчетах нового
    // this.setState((prevState) => {
    //   return { value: prevState.value + 1 };
    // }); - это с расчетом от предыдущего, ниже более сокращенная запись
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };

  handleDescrement = (event) => {
    console.log("Клик уменьшить");
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <div className="Counter">
        {/* <span className="Counter__value">{this.state.value}</span> */}
        {/* <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDescrement}>
            Уменьшить на 1
          </button>
        </div> */}
        <Value value={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDescrement={this.handleDescrement}
        />
      </div>
    );
  }
}

export default Counter;
