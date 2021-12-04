import React from "react";
import { Link } from "react-router-dom";
// components

import CardTable from "components/Cards/CardTable.js";

export default function Pets() {
  return (
    <>
      <h2 class="text-white text-3xl font-semibold relative pt-12 pb-16 px-4">Afiliados</h2>
      <div className="px-4 mb-12">
        <Link
          to="/auth/register"
          className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 relative"
        >
          <i className="fas fa-plus"></i> Nuevo
        </Link>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
        {/* <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div> */}
      </div>
    </>
  );
}
