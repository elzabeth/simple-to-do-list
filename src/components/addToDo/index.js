import React, { useState } from 'react'

const AddToDo = (props) => {

    const addToDoStyle = {
        position: "fixed",
        display: "block",
        width: "80%"
    }

    const [title, setTitle] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newToDo = {id:Math.random(),title:title,done:false}
        props.addToDo(newToDo)
        setTitle("")
    }

    return (
        <div align="center">
        <div style={addToDoStyle}>
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ width: "50%", padding: 10 }}
                placeholder="enter task here"
                required />

            <input type="submit"
                style={{
                    width: 80,
                    padding: 10,
                    fontWeight: 700
                }} />
        </form>
        </div>
    </div>)

}

export default AddToDo;