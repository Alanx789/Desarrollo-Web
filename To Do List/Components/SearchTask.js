import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const SearchTask = ( {toDoList, setLista} ) => {

    const [search, setSearch] = useState('')

    const clickFunc = () => {
        if(!search){ setLista(toDoList) }
        else{
            let data = toDoList.filter( (task) => task.description.includes(search) )
            setLista(data)
         }
        setSearch('')
    }

    return (
        <>
             <format className="TaskAdder">
                <input
                    className='AddInput'
                    type = "text"
                    placeholder='¿Se te olvida algo?'
                    value = {search}
                    onChange = { (e) => { setSearch(e.target.value) } }
                />
                <button className="addButton" onClick={clickFunc}>Buscar</button>
            </format>
        </>
    )
}

SearchTask.propTypes = {
    toDoList : PropTypes.array.isRequired,
    setLista : PropTypes.func.isRequired
}