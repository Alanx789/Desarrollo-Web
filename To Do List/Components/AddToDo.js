import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddToDo = ( {taskAdder} ) => {

    const [input, setInput] = useState('')

    const clickFunc = () => {
        taskAdder(input)
        setInput('')
    }

    return(

        <>
            <format className="TaskAdder">
                <input
                    className='AddInput'
                    type = "text"
                    placeholder='¿Qué haremos hoy?'
                    value = {input}
                    onChange = { (e) => { setInput(e.target.value) } }
                />
                <button className="addButton" onClick={clickFunc}>Agregar tarea</button>
            </format>
        </>

    )
    
}

AddToDo.propType = {
    taskAdder : PropTypes.func.isRequired
}