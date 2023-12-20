import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { AuthContextProvider } from "../context/AuthContext";

const customRender = (
    ui,
  ) =>
    render(
      
      <BrowserRouter basename="/">
        <AuthContextProvider>
          {ui}
        </AuthContextProvider>
      </BrowserRouter>,
    );

export * from "@testing-library/react";
export { customRender as render };
