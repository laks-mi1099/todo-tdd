import '@testing-library/jest-dom';
import { render, fireEvent} from '@testing-library/react';
import React from 'react';
import Form from './Form';
describe("Basic rendering of Form component",() =>{
    it("should have input field",() =>{
        const {getByTestId} = render(<Form/>);
        expect(getByTestId("formInputField")).toBeDefined();
    })
    it("should have text as input field type",() =>{
        const {getByTestId} = render(<Form/>);
        expect(getByTestId("formInputField")).toHaveAttribute("type","text");
    })
    it("should have add button",() =>{
        const {getByTestId} = render(<Form/>);
        expect(getByTestId("addbutton")).toHaveAttribute("type","submit");
        expect(getByTestId("addbutton")).toBeEnabled();
    })
    it("input should record value given",() =>{
        const {getByTestId} = render(<Form/>);
        fireEvent.change(getByTestId("formInputField"),{"target":{"value":"TestInput"}})
        expect(getByTestId("formInputField")).toHaveAttribute("value","TestInput")
    })
    it("Add button should not be disabled when input is given",() =>{
        const {getByTestId} = render(<Form/>);
        fireEvent.change(getByTestId("formInputField"),{"target":{"value":"TestInput"}})
        expect(getByTestId("addbutton")).toBeEnabled();
    })

})