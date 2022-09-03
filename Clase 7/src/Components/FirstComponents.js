//rafc
import React from "react";

/*
export const FirstComponent = (props) =>{
    return(
        <>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </>
    )
}
*/

export const FirstComponent = ( props ) =>{

    const {
        title,
        subtitle = 'Soy un subtitulo'
    } = props;

    return(
        <>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </>
    )
}