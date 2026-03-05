import { render, screen } from "@testing-library/react";
import Greeting from "../Greeting";

describe("Greeting component", () => {
    test("should display provided Name", () => {
        render(<Greeting name="Chiranth" />);
        expect(screen.getByTestId("greeting-message")).toHaveTextContent("Chiranth!");
    });
    test("should display provided Name", () => {
        render(<Greeting />);
        expect(screen.getByTestId("greeting-message")).toHaveTextContent("Guest!");
    });
});