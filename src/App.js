import React from "react";
import Eventlist from "./components/Eventlist";
import AddEvent from "./components/AddEvent";
import TodoApp from "./TodoApp";


export default function App() {
    return (
        <>
            <TodoApp />
            <h1>Lists</h1>
            <Eventlist />
            <AddEvent />
        </>


    );
}