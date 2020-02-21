import React from "react";

const InputItem = ({ onChange, value }) => {
  return (
    <div>
      <input type="text" onChange={onChange} value={value} />
      <button type="submit">add</button>
    </div>
  );
};

export default InputItem;
