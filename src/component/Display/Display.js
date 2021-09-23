import React from 'react'
import "./Display.css";

export const Display = ({value,view}) => {
    const result = view.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return (
        <div className = {`display ${value.length > 7 ? 'length' : ''}` } >
            {result}
        </div>
    )
}
