import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    tag: "",
    experience: "junior",
    licence: false,
  };

  // handleNameChange = (e) => {
  //   this.setState({ name: e.currentTarget.value });
  //   console.log(e.currentTarget.value);
  // };

  // handleTagChange = (e) => {
  //   this.setState({ tag: e.currentTarget.value });
  //   console.log(e.currentTarget.value);
  // };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    console.log(name);
    console.log(value);
    this.setState({ [name]: value });
  };

  handleLicenceChange = (e) => {
    this.setState({ licence: e.currentTarget.checked });
  };

  handelSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitProp(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      tag: "",
      experience: "junior",
      licence: false,
    });
  };

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <label>
          Имя
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Прозвище
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>
        <p>Ваш уровень</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === "junior"}
          />{" "}
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === "middle"}
          />{" "}
          Middle
        </label>

        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === "senior"}
          />{" "}
          Senior
        </label>
        <br />
        <br />
        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          Согласен с условиями
        </label>

        <button type="submit" disabled={!this.state.licence}>
          Отправить
        </button>
      </form>
    );
  }
}

export default Form;
