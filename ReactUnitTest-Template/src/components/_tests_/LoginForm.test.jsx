import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginForm from "../LoginForm"
import userEvent from "@testing-library/user-event"

describe("LoginForm Component", () => {
    test("should render emil, password and submit inputs", () => {
        render(<LoginForm />)
        expect(screen.getByTestId("email-input")).toBeInTheDocument();
        expect(screen.getByTestId("password-input")).toBeInTheDocument();
        expect(screen.getByTestId("submit-button")).toBeInTheDocument();
    });

    test("should show validation error for invalid emai", async() => {
        render(<LoginForm />);
        const emailInput = screen.getByTestId("email-input");


        await userEvent.type(emailInput, "invalid-email");
            fireEvent.blur(emailInput);

            await waitFor(() => {
                expect(screen.getByTestId("email-error")).toBeInTheDocument(
                    "Please enter a valid email",
                );
            });
    });
    test("should show validation error for invalid password", async() => {
        render(<LoginForm />);
        const emailInput = screen.getByTestId("password-input");


        await userEvent.type(emailInput, "invalid-password");
            fireEvent.blur(emailInput);

            await waitFor(() => {
                expect(screen.getByTestId("password-error")).toBeInTheDocument(
                    "Please enter a valid password",
                );
            });
    });

    test("should submit form with valid data", async() =>{
        const mockSubmit = jest.fn().mockResolvedValue();
        render(<LoginForm onSubmit={mockSubmit} />);

        await userEvent.type(screen.getByTestId("email-input"), "test@example.com");
        await userEvent.type(
            screen.getByTestId("password-input"), "Password123@45");
        await userEvent.click(screen.getByTestId("submit-button"));

        await waitFor(() => {
            expect(mockSubmit).toHaveBeenCalledWith({
                email: "test@example.com",
                password: "Password123@45",
                rememberMe: false,
            });
        });
    });
});

