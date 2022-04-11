
import React from "react";
import {Header} from "./header";
import {render,screen} from "@testing-library/react"
import {BrowserRouter} from "react-router-dom";
describe("Header", () => {

    test("should contain image svg arrow", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        expect(screen.getByTestId('arrow')).toBeInTheDocument();
    });

    test("should contain image svg bell", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        expect(screen.getByTestId('bell')).toBeInTheDocument();
    });

    test("should contain image svg person", () => {
        render(<BrowserRouter>
            <Header />
        </BrowserRouter>)
        expect(screen.getByTestId('person')).toBeInTheDocument();
    });

    test("should contain text 'User Pages'", () => {
        render(<BrowserRouter>
            <Header />
        </BrowserRouter>)
        const el = screen.getByText(/User Pages/i);
        expect(el).toBeInTheDocument();
    });



});