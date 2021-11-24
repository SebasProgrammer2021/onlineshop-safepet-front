import React from "react";
import { paymentMethods } from "database/bd";

const Payment = ({ setPaymentMethodSelected }) => {
  const handleChange = (e) => {
    setPaymentMethodSelected({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {paymentMethods.map(({ name, value }, index) => (
        <div className="bg-gray-200" key={index}>
          <div className="items-left justify-center">
            <div className="flex flex-col">
              <label className="inline-flex items-center mt-3 font-semibold ">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 "
                  name="paymentMethod"
                  onChange={handleChange}
                  value={value}
                />
                <span className="ml-2 text-gray-700 text-BlueGray-500 bg-transparent border border-solid border-blueGray-600 hover:bg-lightBlue-500 hover:text-white active:bg-emerald-500 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 p-4">
                  <i className="fas fa-money-check"></i> {name}
                </span>
              </label>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Payment;
