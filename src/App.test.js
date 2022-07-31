import React from 'react';
import '@testing-library/jest-dom';
import { render } from "@testing-library/react"
import App from './App';

describe("Basic Rendering of App Component",()=>{
    it("check App component heading",() =>{
        const {getByText} = render(<App/>);
        expect(getByText("ToDoMatic")).toBeDefined();
        expect(getByText("LakshmiS")).toBeUnDefined();
    })
});