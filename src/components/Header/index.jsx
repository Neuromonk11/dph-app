import React from "react";
import { headerTitles } from "./data";
// views
import { Title, Wrapper } from "./views";

const Header = () => {
  return (
    <Wrapper>
      {headerTitles.map((el) => (
        <Title key={el.id}>{el.text}</Title>
      ))}
    </Wrapper>
  );
};
export default Header;
