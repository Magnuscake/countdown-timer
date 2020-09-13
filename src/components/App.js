import React from "react";

import TimerInput from "./TimerInput";
import Timer from "./Timer";

class App extends React.Component {
  state = {
    time: "",
  };

  onFormSubmit = (startMinutes, startSeconds) => {
    let intervalTime = startMinutes * 60 + parseInt(startSeconds);
    console.log(intervalTime);
    setInterval(() => {
      const minutes = Math.floor(intervalTime / 60);
      let seconds = intervalTime % 60;

      if (seconds < 10) seconds = "0" + seconds;

      this.setState({ time: `${minutes}:${seconds}` });
      intervalTime--;
    }, 1000);
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
