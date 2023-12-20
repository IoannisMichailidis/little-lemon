import { render, screen } from "../../utils/test-conf";
import { LoginForm } from "./LoginForm";

describe("LoginForm", () => {
    test("Renders labels and fields", () => {
      render(
            <LoginForm/>
      );
      // Form Header
      const pickFormHeader = screen.getByText("Welcome Back");
      expect(pickFormHeader).toBeInTheDocument();

      // Email label and field
      const pickEmailLabel = screen.getByText("Email:");
      expect(pickEmailLabel).toBeInTheDocument();
      const pickEmailField = screen.getByTestId("email");
      expect(pickEmailField).toBeInTheDocument();

      // Password label and field
      const pickPasswordLabel = screen.getByText("Password:");
      expect(pickPasswordLabel).toBeInTheDocument();
      const pickPasswordField = screen.getByTestId("password");
      expect(pickPasswordField).toBeInTheDocument();

      // Form Submit Button
      const submitButton = screen.getByDisplayValue("Login");
      expect(submitButton).toBeInTheDocument();

      // Navigation to Sign Up
      const signUpButton = screen.getByDisplayValue("Sign up");
      expect(signUpButton).toBeInTheDocument();
    });

});

// Further Tests my be included