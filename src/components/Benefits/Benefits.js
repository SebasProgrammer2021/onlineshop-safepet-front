import React, { useState } from "react";
import { benefits } from "../../database/bd";
import config from "config";
const axios = require("axios");

export default function Benefits({ benefitsSeleted, setBenefitsSeleted }) {
  const [checkedState, setCheckedState] = useState(
    new Array(5).fill(false)
  );
  const [total, setTotal] = useState(0);

  const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

  axios
    .get(`${config().SERVER_URL}/benefit/getAll`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

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
  };

  return (
    <div>
      <h1 className="text-center text-xl font-semibold text-lightBlue-400 mb-8">Beneficios</h1>
      {benefits.map(({ costo, id, nombre }, index) => {
        return (
          <div key={index}>
            <label
              className="cursor-pointer text-xl flex"
              key={index}
            >
              <input
                className="form-checkbox border-0 rounded text-blueGray-700 w-5 h-5 ease-linear transition-all duration-150 mr-2"
                name={nombre}
                onChange={(e) => handleChange(index, id, e)}
                type="checkbox"
                value={nombre}
                selected={benefitsSeleted.includes(id)}
              />
              <span className="w-full">{`${nombre}`}</span>
              <span className="text-right w-full">${`${costo}`}</span>
              <span className="h-6 w-6 checkmark absolute top-0 left-0 bg-gray-400"></span>
            </label>
          </div>
        );
      })}
      <div className="flex text-xl mt-5">
        <div className="">Total:</div>
        <div className="w-full text-right">{getFormattedPrice(total)}</div>
      </div>
    </div>
  );
};
