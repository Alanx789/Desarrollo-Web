import React from "react"
import PropTypes from 'prop-types'

export let SubstractCounter = ( {onSubstractPress} ) => { 

    return(
        <button onClick = {onSubstractPress}>
            -1
        </button>
    )

}

SubstractCounter.propTypes = {
    onSubstractPress : PropTypes.func.isRequired
}