import React from "react";
import { Title, Wrapper } from "./views";

const Total = ({ totalZ, totalBez, totalDiscount }) => {
  return (
    <Wrapper>
      <Title>Celková cena: {totalZ}</Title>
      <Title>Celková cena: {totalBez} (20% DPH)</Title>
      <Title>Celková zľava: {totalDiscount}</Title>
    </Wrapper>
  );
};
export default Total;
