import React from "react";

const InputItem = ({ disabled, onChange, value }) => {
  return (
    <div>
      <input type="text" onChange={onChange} value={value} />
      <button type="submit" disabled={disabled}>
        add
      </button>
    </div>
  );
};

export default InputItem;
