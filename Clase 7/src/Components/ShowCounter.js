import React from "react"
import PropTypes from 'prop-types'

export const ShowCounter = ( {number} ) => {
    return(
        <p>{number}</p>
    )
}

/* PropTypes sirve para forzar a que se use correctamente el componente
(EL tipo de entrada) */
ShowCounter.propTypes = {
    number : PropTypes.number.isRequired
}