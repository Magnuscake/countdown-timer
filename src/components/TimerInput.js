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
      <div className="field">
        <form onSubmit={this.handleSubmit}>
          <div className="control">
            <div className="columns is-centered">
              <div className="column is-3">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter minutes"
                  value={this.state.minutes}
                  onChange={(e) => this.setState({ minutes: e.target.value })}
                />
              </div>
              <div className="column is-3">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter seconds"
                  value={this.state.seconds}
                  onChange={(e) => this.setState({ seconds: e.target.value })}
                />
              </div>
            </div>

            <div className="columns is-centered is-mobile mt-2">
              <button className="button is-info">Start countdown</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TimerInput;
