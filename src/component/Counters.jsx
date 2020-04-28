import React, { Component } from "react";
import Counter from "./Counter";

export default class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.onReset} className="btn btn-sm btn-primary m-2">Reset</button>
        <button onClick={this.props.onAdditem} className="btn btn-sm btn-success">Add</button>
        {this.props.data.map(val=>{
          return (
            <Counter key={val.id} data={val} onIncrement={this.props.onIncrement} onDelete={this.props.onDelete} onDecrement={this.props.onDecrement} />
          )
        })}
      </React.Fragment>
    );
  }
}
