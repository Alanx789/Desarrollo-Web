import React from "react"
import PropTypes from 'prop-types'

/* AL ponerlo afuera no se le asigna memoria, lo que le da más velocidad */

export let AddCounter = ( {onAddPress} ) => { 

    return(
        <button onClick = {onAddPress}>
            +1
        </button>
    )

}

AddCounter.propTypes = {
    onAddPress : PropTypes.func.isRequired
}