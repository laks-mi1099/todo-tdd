import '@testing-library/jest-dom';
import React from "react";
import {render, screen} from '@testing-library/react';
import FilterButton from "./FilterButton";
describe ("Basic Rendering of filter", () =>{
    it("should have filter button", () => {
        const { getByTestId } =  render(<FilterButton/>);
        expect(getByTestId("filterbutton")).toBeDefined();
    })
    it("filter button should not be disabled", () =>{
        const { getByTestId } =  render(<FilterButton/>);
        expect(getByTestId("filterbutton")).not.toBeDisabled();
    })
})