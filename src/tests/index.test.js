/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";


describe('Name of the group', () => {
    it("should render the app", () => {
        render(<App />);
        expect(screen.getByText(/learn react/i)).toBeInTheDocument();
    })

    it("Should show dialog", () => {
        render(<App />)
        expect(screen.getAllByRole("presentation")).toHaveLength(2);
    })
});