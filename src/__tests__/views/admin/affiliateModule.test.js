import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AffiliateModule from "../../../views/admin/AffiliateModule";

const renderComponent = () => {
  render(
    <BrowserRouter>
      <AffiliateModule />
    </BrowserRouter>
  );
};

describe("Affiliate module tests", () => {
  beforeEach(() => {
    renderComponent();
  });

  it("should render list module title", () => {
    expect(screen.getByText("Listado Afiliados")).toBeInTheDocument;
  });
});
