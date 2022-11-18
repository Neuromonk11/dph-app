import React, { useState } from "react";
// components
import InputItem from "../Input";
// views
import { Button, ButtonC, ModalContent, Wrapper } from "./views";

const Modal = ({ close, setData }) => {
  const [inputValues, setInputValues] = useState({
    name: "",
    priceOne: "",
    amount: "",
    discount: "",
    beforeDiscount: "",
    afterDiscount: "",
    zDph: "",
  });

  const totalBefore = +inputValues.priceOne * +inputValues.amount;

  const totalAfter = (
    totalBefore -
    totalBefore * (+inputValues.discount / 100)
  ).toFixed(2);
  const totalZDvh = (+totalAfter + +totalAfter * 0.2).toFixed(2);

  const inputHandler = (e) => {
    setInputValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const AddItem = () => {
    setData((prev) => [
      ...prev,
      {
        ...inputValues,
        beforeDiscount: +totalBefore,
        afterDiscount: +totalAfter,
        zDph: +totalZDvh,
      },
    ]);
    close();
  };

  return (
    <Wrapper>
      <ModalContent>
        <InputItem
          handler={(e) => inputHandler(e)}
          label="Titul"
          name="name"
          value={inputValues.name}
        />
        <InputItem
          handler={(e) => inputHandler(e)}
          label="cena(€)"
          name="priceOne"
          type="number"
          value={inputValues.priceOne}
        />
        <InputItem
          handler={(e) => inputHandler(e)}
          label="Množstvo"
          name="amount"
          type="number"
          value={inputValues.amount}
        />
        <InputItem
          handler={(e) => inputHandler(e)}
          label="zľava (%)"
          name="discount"
          type="number"
          value={inputValues.discount}
        />
        <Button onClick={AddItem}>Рridať do zoznamu</Button>
        <ButtonC onClick={() => close(false)}>Zavrieť</ButtonC>
      </ModalContent>
    </Wrapper>
  );
};
export default Modal;
