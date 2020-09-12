import React from "react";

import TimerInput from "./TimerInput";
import Timer from "./Timer";

class App extends React.Component {
  state = {
    time: "",
  };

  onFormSubmit = (timerMinutes, timerSeconds) => {
    this.setState({ time: `${timerMinutes}:${timerSeconds}` });
  };

  displayCountdown = () => {
    return `<h1> ${this.state.minutes}:${this.state.seconds} </h1>`;
  };
  render() {
    return (
      <div>
        <TimerInput onFormSubmit={this.onFormSubmit} />
        <Timer displayCountdown={this.state.time} />
      </div>
    );
  }
}

export default App;
