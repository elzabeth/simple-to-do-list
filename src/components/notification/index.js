import React, { useState } from 'react'
import { EventEmitter } from 'fbemitter'

export const emitter = new EventEmitter();

export default function Notification() {

    const [open, setOpen] = useState(false)
    const [msg, setMsg] = useState()

    const reset = () => {
        setOpen(false)
    }

    const autoHideAfterTimeout = () => {
        setTimeout(() => reset(), 2000)
    }

    const notificationStyle = {
        padding: 10,
        border: "1px green solid",
        marginBottom: 15,
        backgroundColor: "#00beff",
        borderRadius: 2
    }

    emitter.addListener("NOTIFICATION", (msg) => {
        setOpen(true)
        setMsg(msg + " added successfully")
        autoHideAfterTimeout()
    })

    if (!open) {
        return null
    }

    return <div style={notificationStyle}>
        {msg}
        </div>
}