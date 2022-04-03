import {Navbar} from "../navbar";
import {render,screen} from "@testing-library/react"

describe("Navbar", () => {

    test("should contain image alt='arrow'", () => {
        render(<Header />)
        const el = screen.getByAltText(/arrow/i);
        expect(el).toBeInTheDocument();
    });

    test("should contain image alt='bell'", () => {
        render(<Header />)
        const el = screen.getByAltText(/bell/i);
        expect(el).toBeInTheDocument();
    });

    test("should contain image alt='person'", () => {
        render(<Header />)
        const el = screen.getByAltText(/person/i);
        expect(el).toBeInTheDocument();
    });

    test("should contain text 'User Pages'", () => {
        render(<Header />)
        const el = screen.getByText(/User Pages/i);
        expect(el).toBeInTheDocument();
    });



});