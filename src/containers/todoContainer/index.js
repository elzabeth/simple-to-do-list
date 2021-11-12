import React, {useState} from 'react'
import Todo from '../../components/todoList/index'
import AddToDo from '../../components/addToDo/index'

const todoList = [
    { key: 1,id: 1, title: 'Learn React', done: true },
    { key: 2,id: 2, title: 'Learn Angular', done: false },
    { key: 3,id: 3, title: 'Learn Vue', done: true },
]

const TodoContainer = () => {

    const [todos, setToDos] = useState(todoList)

    const handleAddToDo = (newToDo) => {
        const newTodoList = [...todos, newToDo]
        setToDos(newTodoList)
    }

    const handleRemoveToDO = (id) => {
        const removedTodoList = todos.filter(obj => obj.id !== id)
        setToDos(removedTodoList)
    }

    return <div style={{margin:20}}>
        <h1 align="center">Todo Application</h1>
        {   todos.length>0 ?
            todos.map(obj => <Todo todo={obj} removeToDo={handleRemoveToDO} />) 
                : <p align="center">No To Do's left</p>
        }
        <AddToDo addToDo={handleAddToDo}/>
    </div>;
}

export default TodoContainer