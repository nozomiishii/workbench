import React from "react";

const Input = ({ type, onkeyDown, placeholder }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      onkeyDown={onkeyDown}
      placeholder={placeholder}
    />
  );
};

const forwaredInput = React.forwardRef(Input);

export default forwaredInput;
