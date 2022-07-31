import '@testing-library/jest-dom';
import { render, fireEvent} from '@testing-library/react';
import React from 'react';
import Todo from './Todo';
describe("Basic elements of Todo",() =>{
    it("should display the basic tasks",()=>{
        const {getByTestId} = render(<Todo/>);
        expect(getByTestId("viewTask")).toBeDefined();
    })
    it("should have a edit task button",() =>{
        const {getByText} = render(<Todo/>)
        expect(getByText("Edit")).toBeEnabled()
    })
    it("should have a completion checkbox",() =>{
        const {getByTestId} = render(<Todo/>)
        expect(getByTestId('checkbox')).toHaveAttribute("type","checkbox");
    })
})

describe("Testing functionality of the Todo component elements",() =>{
    it("checking the functionality of the checkbox",() =>{
        const {getByTestId} = render(<Todo/>)
        fireEvent.change(getByTestId("checkbox"),{target:{"defaultChecked":true}});
        expect(getByTestId("checkbox")).toBeChecked();
    })
    it("checking edit button functionality",() =>{
        const {getByText,getByTestId} = render(<Todo/>)
        fireEvent.click(getByText("Edit"))
        expect(getByTestId("editTaskForm")).toBeDefined();
    })
    it("checking cancel button functionality",() =>{
        const {getByText,getByTestId} = render(<Todo/>)
        fireEvent.click(getByText("Edit"))
        fireEvent.click(getByText("Cancel"))
        expect(getByText("Delete")).toBeDefined();
    })
})