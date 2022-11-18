import React from "react";
// views
import { Input, Name, Wrapper } from "./views";

const InputItem = ({ name, handler, value, label, type }) => {
  return (
    <Wrapper>
      <Name>{label}</Name>
      <Input onChange={handler} value={value} name={name} type={type} />
    </Wrapper>
  );
};
export default InputItem;
