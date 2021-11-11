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
        const newTodoList = [...todos,newToDo]
        setToDos(newTodoList)
    }

    return <div style={{margin:20}}>
        <h1 align="center">Todo Application</h1>
        {todos.map(obj => <Todo todo={obj} />)}
        <AddToDo addToDo={handleAddToDo}/>
    </div>;
}

export default TodoContainer