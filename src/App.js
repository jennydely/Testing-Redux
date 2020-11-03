import React from "react";
import Eventlist from "./components/Eventlist";
import Packlist from "./components/Packlist";
import AddEvent from "./components/AddEvent";



export default function App() {
    return (
        <>
           
            <h1>Lists</h1>
            <Eventlist />
            <AddEvent />
            <Packlist />
            
        </>


    );
}