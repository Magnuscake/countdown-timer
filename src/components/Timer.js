import React from "react";

const Timer = (props) => {
  return (
    <div style={{ fontFamily: "cabin" }} className="timer is-size-1">
      {props.displayCountdown}
    </div>
  );
};

export default Timer;
