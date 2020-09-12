import React from "react";

class TimerInput extends React.Component {
  state = {
    minutes: "",
    seconds: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (
      typeof Number(this.state.minutes) ||
      typeof Number(this.state.minutes)
    ) {
      this.props.onFormSubmit(this.state.minutes, this.state.seconds);
    } else console.log("Not a number");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter minutes"
            value={this.state.minutes}
            onChange={(e) => this.setState({ minutes: e.target.value })}
          />
          <input
            type="text"
            placeholder="Enter seconds"
            value={this.state.seconds}
            onChange={(e) => this.setState({ seconds: e.target.value })}
          />
          <button>Start countdown</button>
        </form>
      </div>
    );
  }
}

export default TimerInput;
