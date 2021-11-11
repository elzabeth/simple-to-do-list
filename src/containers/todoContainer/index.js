import React from 'react'
import Todo from '../../components/todoList/index'

const todoList = [
    { key: 1,id: 1, title: 'Learn React', done: true },
    { key: 2,id: 2, title: 'Learn Angular', done: false },
    { key: 3,id: 3, title: 'Learn Vue', done: false },
]

function TodoContainer() {
    return <div style={{margin:20}}>
        <h1 align="center">Todo Application</h1>
        {todoList.map(obj => <Todo todo={obj} />)}
    </div>;
}

export default TodoContainer