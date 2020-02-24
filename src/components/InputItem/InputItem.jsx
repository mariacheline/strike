import React from "react";
import { StyledInputItem } from "./style";

const InputItem = ({ disabled, onChange, value }) => {
  return (
    <StyledInputItem disabled={disabled}>
      <input
        type="text"
        onChange={onChange}
        value={value}
        placeholder="add an Item"
      />
      <button type="submit" disabled={disabled}>
        add
      </button>
    </StyledInputItem>
  );
};

export default InputItem;
