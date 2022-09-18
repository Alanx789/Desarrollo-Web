import React from 'react'
import PropTypes from 'prop-types'
import { BsFillCheckCircleFill } from "react-icons/bs";

export const ShowList = ( {toDoList, eraseTask} ) => {

    return toDoList.map( (task, index) => (
            <div className="individualTask" key={index}>
                <div key={task.id}>
                    {task.id}
                    <>     </>
                    {task.description}
                </div>
                {/* icons */}
                <div className="Erase" onClick={ () => eraseTask(task.id)}>
                    <BsFillCheckCircleFill/>
                </div>
            </div>
    ))

}

ShowList.propTypes = {
    toDoList : PropTypes.array.isRequired,
    eraseTask : PropTypes.func.isRequired
}