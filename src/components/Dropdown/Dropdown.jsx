import React from "react";
import "./Dropdown.css";

class Dropdown extends React.Component {
  state = {
    visible: false,
  };

  //   show = () => {
  //     this.setState({ visible: true });
  //   };
  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  toggle = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  render() {
    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
          //   onMouseOver={this.toggle}
        >
          {this.state.visible ? "Скрыть" : "Показать"}
        </button>
        {/* <button type="button" className="Dropdown__toggle" onClick={this.hide}>
          Скрыть
        </button> */}
        {this.state.visible && (
          <div className="Dropdown__menu">Выпадающее меню</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
