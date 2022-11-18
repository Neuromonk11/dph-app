import React, { useState } from "react";
// components
import Item from "../Item";
import Modal from "../Modal";
import Total from "../Total-Bar";
// views
import { Button } from "./views";

const Table = () => {
  const [data, setData] = useState([]);
  const [activeModal, setActiveModal] = useState(false);

  const totalZ = data
    .reduce((acc, current) => acc + +current.afterDiscount, 0)
    .toFixed(2);

  const totalBez = data
    .reduce((acc, current) => acc + +current.zDph, 0)
    .toFixed(2);

  const totalDiscount = (
    data.reduce((acc, current) => acc + +current.beforeDiscount, 0) - totalZ
  ).toFixed(2);

  const removeItem = (index) => {
    setData((prev) => prev.filter((item) => item !== prev[index]));
  };

  console.log("data", data);
  return (
    <>
      <>
        {data.map((el, index) => (
          <>
            <Item data={el} del={() => removeItem(index)} />
          </>
        ))}
        <Total
          totalZ={totalZ}
          totalBez={totalBez}
          totalDiscount={totalDiscount}
        />

        <Button onClick={() => setActiveModal(true)}>PRIDAŤ</Button>
        {activeModal && <Modal close={setActiveModal} setData={setData} />}
      </>
    </>
  );
};
export default Table;
