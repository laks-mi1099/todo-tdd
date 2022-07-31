import '@testing-library/jest-dom';
import { render, fireEvent} from '@testing-library/react';
import React from 'react';
import App from './App';
describe("Basic Rendering the App Component",() =>{
    it("checking the heading",()=>{
        const {getByText} = render(<App/>)
        expect(getByText("ToDoMatic")).toBeDefined();
    })
    it("checking add new task form",() =>{
        const {getByTestId} = render(<App/>)
        expect(getByTestId("addTaskForm")).toBeDefined();
    })
    it("checking the filter tasks options",() =>{
        const {getByTestId} = render(<App/>)
        expect(getByTestId("filterTasks")).toBeInTheDocument();
    })
    it("checking the tasks list",() =>{
        const {getByTestId} = render(<App/>)
        expect(getByTestId("displayTasks")).toBeInTheDocument();
    })

})