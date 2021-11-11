import React from 'react'

export default function Todo(props) {

    const { title, done } = props.todo

    return (<div>
        <input type="checkbox"
            style={{ margin: "0 20" }}
            checked={done}
        />
        <span>{title}</span>
        <span style={{
            position: "fixed",
            right: 20,
            padding: "0 10px",
            cursor: "pointer",
            fontWeight: 600
        }}>
            X</span>
        <hr/>
        </div>)
}