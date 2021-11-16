import React, { useState } from "react";

const Benefits = () => {
  const customerData = [];

  const benefits = [
    {
      id: 1,
      costo: 134232,
      nombre: "medicina 1",
    },
    {
      id: 2,
      costo: 123422,
      nombre: "medicina 2",
    },
    {
      id: 3,
      costo: 1345627,
      nombre: "medicina 3",
    },
    {
      id: 4,
      costo: 13456872,
      nombre: "medicina 4",
    },
    {
      id: 5,
      costo: 15642,
      nombre: "medicina 5",
    },
  ];

  const handleChange = (e) => {
    customerData.push(e.target.value);
    console.log("cambio", customerData);
  };

  return (
    <div>
      {benefits.map((benefit, index) => {
        return (
          <label
            className="select-none container block relative cursor-pointer text-xl pl-8"
            key={index}
          >
            {`${benefit.nombre}`}: ${`${benefit.costo}`}
            <input
              className="absolute opacity-0 left-0 top-0 cursor-pointer"
              type="checkbox"
              value={benefit.id}
              name={benefit.nombre}
              // checked="checked"
              onClick={handleChange}
            />
            <span className="h-6 w-6 checkmark absolute top-0 left-0 bg-gray-400"></span>
          </label>
        );
      })}
    </div>
  );
};

export default Benefits;
