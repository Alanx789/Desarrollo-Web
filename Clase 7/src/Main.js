//rafc React Functional Component
//rafcr React Functional Component + Exp
/* import React, {Fragment} from "react"; */ 
import React, {useState} from "react";
/* import { FirstComponent } from "./Components/FirstComponents"; */
import { AddCounter } from "./Components/AddCounter";
import { ShowCounter } from "./Components/ShowCounter";
import { SubstractCounter } from "./Components/SubstractCounter";

import './styles.css'

export const Main = () => {

    /* Encapsulado de información, permite actualizar la información en todos los lugares donde este */
    const[number, setNumber] = useState(0);
    
    const onAdd = () => {
        setNumber (number + 1);
        console.log('I added one')
    }

    const onSubstract = () => {
        setNumber (number - 1);
        console.log('I  one')
    }

    return (

        <>
            {/* Permite mostrar el estado del contador */}
            <ShowCounter number={number}/>

            {/* Permite manipular la información */}
            <AddCounter onAddPress={onAdd}/>
            <SubstractCounter onSubstractPress={onSubstract} />

        </>

    )
};