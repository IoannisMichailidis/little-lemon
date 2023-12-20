import { render, screen } from "../../utils/test-conf";
import { ReviewForm } from "./ReviewForm";

describe("ReviewForm", () => {
    test("Renders labels and fields", () => {
        render(
                <ReviewForm/>
        );
        // Form Header
        const pickFormHeader = screen.getByText("Give us a review");
        expect(pickFormHeader).toBeInTheDocument();

        // Food rating label
        const pickFoodRatingLabel = screen.getByText("Food Rating:");
        expect(pickFoodRatingLabel).toBeInTheDocument();

        // Food rating label
        const pickServiceRatingLabel = screen.getByText("Service Rating:");
        expect(pickServiceRatingLabel).toBeInTheDocument();


        // Food rating label
        const pickAtmposphereRatingLabel = screen.getByText("Atmosphere Rating:");
        expect(pickAtmposphereRatingLabel).toBeInTheDocument();


        // Review label and field
        const pickTextReviewLabel = screen.getByText("Review:");
        expect(pickTextReviewLabel).toBeInTheDocument();
        const pickTextReviewField = screen.getByTestId("text-review");
        expect(pickTextReviewField).toBeInTheDocument();

      // Form Submit Button
      const submitButton = screen.getByDisplayValue("Submit your review");
      expect(submitButton).toBeInTheDocument();
    });
});

// Further Tests my be included