import React from 'react'
import { emitter } from '../notification/index'

export default function Todo(props) {

    const { title, done, id } = props.todo

    const handleCheckboxChange = () => {
        if (!done)
            props.handleChange(id)
    }

    return (<div>
        <input type="checkbox"
            style={{ margin: "0 20" }}
            checked={done}
            onChange={() => {
                handleCheckboxChange()
                emitter.emit("NOTIFICATION", "Task completed")
            }}
        />
        <span style={done?{textDecoration:"line-through"}:null}>{title}</span>
        <span style={{
            position: "fixed",
            right: 20,
            padding: "0 10px",
            cursor: "pointer",
            fontWeight: 600
        }}
            onClick={() => {
                props.removeToDo(id)
                emitter.emit("NOTIFICATION", "Task removed")
            }}
        >
            X</span>
        <hr/>
        </div>)
}