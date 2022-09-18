import React, { useState } from 'react'
import { AddToDo, SearchTask, ShowList } from './Components/Components'


import "./Main.css"

export const Main = () => {

    //Lista de tareas
    const [taskList, setTaskList] = useState([
        { id: 1, description: "Comer" },
        { id: 2, description: "Dormir" }
    ])

    const [michis, setMichis] = useState([...taskList])

    //Numero de ID
    const [counter, setCounter] = useState(3)
    const addCounter = () => { counter === 999 ? setCounter(0) : setCounter(counter + 1) }

    //Agregar tarea
    const addTask = (taskText) => {

        if (taskText === "") { return }

        const newTask = {
            id: counter,
            description: taskText
        }

        setTaskList([...taskList, newTask])
        setMichis([...taskList,newTask])
        addCounter()
    }

    //Borrar tarea
    const delTask = (id) => {

        const newList = taskList.filter((task) => task.id !== id)
        setTaskList(newList)
        setMichis(newList)

    }

    return (
        <>
            <div className='toDoList'>
                <h1>Cosas por hacer:</h1>
                <AddToDo taskAdder={addTask}/>
                <SearchTask toDoList={taskList} setLista={setMichis}/>
                <ShowList toDoList={michis} eraseTask={delTask}/>
            </div>
        </>
    )

}