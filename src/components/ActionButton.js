import React from "react";

const ActionButton = ({ placeholder, handleOnClick }) => {
  return (
    <div>
      <button className="button is-primary" onClick={handleOnClick}>
        {placeholder}
      </button>
    </div>
  );
};

export default ActionButton;
