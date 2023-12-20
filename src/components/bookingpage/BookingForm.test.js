import { render, screen } from "../../utils/test-conf";
import { BookingForm } from "./BookingForm";

describe("BookingForm", () => {
    test("Renders labels and fields", () => {
      render(
            <BookingForm/>
      );
      // Form Header
      const pickFormHeader = screen.getByText("Book Now");
      expect(pickFormHeader).toBeInTheDocument();

      // Date label and field
      const pickDateLabel = screen.getByText("Choose date");
      expect(pickDateLabel).toBeInTheDocument();
      const pickDateField = screen.getByTestId("res-date");
      expect(pickDateField).toBeInTheDocument();

      // Time label and field
      const pickTimeLabel = screen.getByText("Choose time");
      expect(pickTimeLabel).toBeInTheDocument();
      const pickTimeField = screen.getByTestId("res-time");
      expect(pickTimeField).toBeInTheDocument();

      // Guest label and field
      const pickNumberGuestLabel = screen.getByText("Number of guests");
      expect(pickNumberGuestLabel).toBeInTheDocument();
      const pickNumberGuestField = screen.getByTestId("guests");
      expect(pickNumberGuestField).toBeInTheDocument();

      // Occassion label and field
      const pickOccasionLabel = screen.getByText("Occasion");
      expect(pickOccasionLabel).toBeInTheDocument();
      const pickOccasionField = screen.getByTestId("occasion");
      expect(pickOccasionField).toBeInTheDocument();

      // Form Submit Button
      const submitButton = screen.getByDisplayValue("Make Your reservation");
      expect(submitButton).toBeInTheDocument();
    });
});

// Further Tests my be included