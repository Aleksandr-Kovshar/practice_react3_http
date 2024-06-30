import React, { PureComponent } from "react";
import classNames from "classnames";
import "./Tabs.css";

class Tabs extends PureComponent {
  state = {
    activeTabIdx: 0,
  };

  // Если Tabs extends Component и import React, { Component } from "react";, то :

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.activeTabIdx !== this.state.activeTabIdx;
  // }

  setActiveTabIdx = (index) => {
    this.setState({ activeTabIdx: index });
  };

  render() {
    const { activeTabIdx } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabIdx];

    return (
      <>
        <div>
          {items.map((item, index) => (
            <button
              type="button"
              key={item.label}
              onClick={() => this.setActiveTabIdx(index)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
        </div>
      </>
    );
  }
}

export default Tabs;
