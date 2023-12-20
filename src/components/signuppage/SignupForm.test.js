import { render, screen } from "../../utils/test-conf";
import { SignupForm } from "./SignupForm";

describe("SignupForm", () => {
    test("Renders labels and fields", () => {
      render(
            <SignupForm/>
      );
      // Form Header
      const pickFormHeader = screen.getByText("Register");
      expect(pickFormHeader).toBeInTheDocument();

        // Email label and field
        const pickUsernameLabel = screen.getByText("Username:");
        expect(pickUsernameLabel).toBeInTheDocument();
        const pickUsernameField = screen.getByTestId("user-name");
        expect(pickUsernameField).toBeInTheDocument();

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
      const submitButton = screen.getByDisplayValue("Sign Up");
      expect(submitButton).toBeInTheDocument();

      // Navigation to Sign Up
      const signUpButton = screen.getByDisplayValue("Login");
      expect(signUpButton).toBeInTheDocument();
    });

});

// Further Tests my be included