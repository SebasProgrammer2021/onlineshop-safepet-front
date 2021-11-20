import React, { useState } from "react";
import { benefits } from "../bd";

const Benefits = ({ benefitsSeleted, setBenefitsSeleted }) => {
  const [checkedState, setCheckedState] = useState(
    new Array(5).fill(false)
  );
  const [total, setTotal] = useState(0);

  const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

  // function that calculates the mensual amount and set the benefits ids array
  const handleChange = (position, idBenefit) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + benefits[index].costo;
        }
        return sum;
      },
      0
    );
    setTotal(totalPrice);

    let find = benefitsSeleted.indexOf(idBenefit)
    if (find > -1) {
      benefitsSeleted.splice(find, 1);
    } else {
      benefitsSeleted.push(idBenefit);
    }

    setBenefitsSeleted(benefitsSeleted);
    setTotal(totalPrice);
  };

  return (
    <div>
      {benefits.map(({ costo, id, nombre }, index) => {
        return (
          <label
            className="select-none container  relative cursor-pointer text-xl pl-8 text-left	flex"
            key={index}
          >
            <span className="w-5/12">{`${nombre}`}</span>
            <span className="text-right w-full">${`${costo}`}</span>
            <input
              className="absolute opacity-0 left-0 top-0 cursor-pointer"
              name={nombre}
              onChange={() => handleChange(index, id)}
              type="checkbox"
              value={nombre}
              selected={benefitsSeleted.includes(id)}
            />
            <span className="h-6 w-6 checkmark absolute top-0 left-0 bg-gray-400"></span>
          </label>
        );
      })}
      <div className="flex text-xl mt-5">
        <div className="">Total:</div>
        <div className="w-full text-right">{getFormattedPrice(total)}</div>
      </div>
    </div>
  );
};

export default Benefits;
