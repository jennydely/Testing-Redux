import React from "react";
import Eventlist from "./components/Eventlist";
import AddEvent from "./components/AddEvent";
import Packlist from "./components/Packlist";
import Favouritelist from "./components/Favouritelist";



export default function App() {
    return (
        <>
           
            <h1>Lists</h1>
            <Eventlist />
            <AddEvent />
            <Packlist />
            <Favouritelist />
            
        </>


    );
}