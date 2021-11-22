import React from 'react';

const Alert = ({ message, type }) => {
  let alertColor = ""
  let defineAlertType = () => {
    switch (type) {
      case 'success':
        alertColor = "bg-emerald-500";
        break;
      case 'information':
        alertColor = " bg-lightBlue-500";
        break;
      case 'error':
        alertColor = "bg-red-500";
        break;
      default:
        break;
    }
  }

  defineAlertType();

  return (
    <div className={`text-white px-6 py-4 border-0 rounded relative mb-4 ${alertColor}`}>
      <span className="text-xl inline-block mr-5 align-middle">
        <i className="fas fa-bell"></i>
      </span>
      <span className="inline-block align-middle mr-8">
        <b className="capitalize">{message}</b>
      </span>
      <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
        <span>×</span>
      </button>
    </div>
  );
};

export default Alert;