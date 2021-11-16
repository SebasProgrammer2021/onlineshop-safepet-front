import React, { useState } from "react";
import Benefits from "./components/Benefits";

const RegisterhtmlForm = () => {
  const [customerData, setCustomerData] = useState({
    cedula: "",
    nombre: "",
    apellido: "",
    direccion: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setCustomerData({
      ...customerData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(customerData);

  return (
    <div>
      <div className="grid min-h-screen place-items-center">
        <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-xl font-semibold">
            Hello there 👋,{" "}
            <span className="font-normal">
              please fill in your inhtmlFormation to continue
            </span>
          </h1>
          <form className="mt-6">
            <span className="w-1/2">
              <label
                htmlFor="cedula"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Cedula
              </label>
              <input
                id="cedula"
                type="number"
                name="cedula"
                onChange={handleChange}
                placeholder="xxxxxxx"
                autoComplete="given-name"
                className="block w-full p-3 mt-2 mb-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </span>
            <div className="flex justify-between gap-3">
              <span className="w-1/2">
                <label
                  htmlFor="nombre"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  onChange={handleChange}
                  placeholder=""
                  autoComplete="given-name"
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
              </span>
              <span className="w-1/2">
                <label
                  htmlFor="apellido"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Apellido
                </label>
                <input
                  id="apellido"
                  type="text"
                  name="apellido"
                  onChange={handleChange}
                  placeholder=""
                  autoComplete="family-name"
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
              </span>
            </div>
            <label
              htmlFor="direccion"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Dirección
            </label>
            <input
              id="direccion"
              type="text"
              name="direccion"
              onChange={handleChange}
              placeholder="john.doe@company.com"
              autoComplete="email"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <label
              htmlFor="telefono"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Teléfono
            </label>
            <input
              id="telefono"
              type="text"
              name="telefono"
              onChange={handleChange}
              placeholder="0000000"
              autoComplete="new-password"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <div className="mt-10">
              <Benefits></Benefits>
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterhtmlForm;
