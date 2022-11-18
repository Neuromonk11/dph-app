import React from "react";
// views
import { DeleteBtn, Title, Wrapper } from "./views";

const Item = ({ data, del }) => {
  return (
    <Wrapper>
      <Title>{data.name}</Title>
      <Title>{data.priceOne}€</Title>
      <Title>{data.amount || 0} (pcs)</Title>
      <Title>{data.beforeDiscount}€</Title>
      <Title>{data.discount || 0}%</Title>
      <Title>{data.afterDiscount}€</Title>
      <Title>{data.zDph}€</Title>

      <DeleteBtn onClick={del}>VYMAZAŤ</DeleteBtn>
    </Wrapper>
  );
};
export default Item;
