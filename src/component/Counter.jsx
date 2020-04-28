import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div className="my-1">
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.data)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.data)}
          className="btn btn-sm btn-warning ml-2"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.data.id)}
          className="btn btn-danger btn-sm mx-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.data.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatValue() {
    const { value } = this.props.data;
    return value === 0 ? "Zero" : value;
  }
}
