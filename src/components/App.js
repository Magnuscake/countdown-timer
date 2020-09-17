import React from "react";

import TimerInput from "./TimerInput";
import Timer from "./Timer";
import ActionButton from "./ActionButton";

class App extends React.Component {
  state = {
    time: "",
    paused: false,
    reset: false,
  };

  startCountdown = (startMinutes, startSeconds) => {
    let count = startMinutes * 60 + parseInt(startSeconds);
    this.timer(count);
  };

  timer(intervalTime) {
    let countdown = setInterval(() => {
      // To reset timer
      if (this.state.reset) {
        this.setState({
          time: "",
          reset: false,
        });
        clearInterval(countdown);
        return;
      }

      let _minutes = Math.floor(intervalTime / 60);
      let _seconds = intervalTime % 60;

      // To pause timer
      if (this.state.paused) {
        return;
      }

      _seconds = _seconds < 10 ? "0" + _seconds : _seconds;

      this.setState({ time: `${_minutes}:${_seconds}` });
      intervalTime--;

      // To stop countdown once time is 0
      if (intervalTime < 0) {
        clearInterval(countdown);
        return;
      }
    }, 1000);
  }

  render() {
    return (
      <div className="container px-3 mt-3">
        <div
          className="is-size-2 mb-2 has-text-centered"
          style={{ fontFamily: "cabin" }}
        >
          COUNTDOWN TIMER
        </div>
        <TimerInput onFormSubmit={this.startCountdown} />

        <div className="columns is-centered is-mobile mt-5">
          <Timer displayCountdown={this.state.time} />
        </div>

        <div className="columns is-centered is-mobile">
          <div className="buttons">
            <div className="column">
              <ActionButton
                placeholder={this.state.paused ? "Resume" : "Pause"}
                handleOnClick={() => {
                  this.setState((prevState) => ({
                    paused: !prevState.paused,
                  }));
                }}
              />
            </div>
            <div className="column">
              <ActionButton
                placeholder="Reset"
                handleOnClick={() => {
                  this.setState((prevState) => ({
                    reset: !prevState.reset,
                  }));
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
