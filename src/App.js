import React, { Component } from "react";
import Counters from "./component/Counters";
import Navbar from "./component/Navbar";

export default class App extends Component {
  state = {
    data: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleIncrement = (obj) => {
    const data = [...this.state.data];
    const index = data.indexOf(obj);
    data[index].value++;
    this.setState({ data });
  };
  handleDecrement = (obj) => {
    if (obj.value !== 0) {
      const data = this.state.data.map((val) => {
        if (val.id === obj.id) {
          val.value--;
        }
        return val;
      });
      this.setState({ data });
    }
  };
  handleDelete = (id) => {
    const data = this.state.data.filter((val) => val.id !== id);
    this.setState({ data });
  };
  handleAddItem = () => {
    let { data } = this.state;
    const newItem = { id: Date.now(), value: 0 };
    data.push(newItem);
    this.setState({ data });
  };
  handleReset = () => {
    const data = this.state.data.map((val) => {
      val.value = 0;
      return val;
    });
    this.setState({ data });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar data={this.state.data} />
        <Counters
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          data={this.state.data}
          onDecrement={this.handleDecrement}
          onAdditem={this.handleAddItem}
        />
      </React.Fragment>
    );
  }
}
