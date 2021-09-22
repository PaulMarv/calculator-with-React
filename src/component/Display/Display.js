import React from 'react'
import "./Display.css";

export const Display = ({value}) => {
    const num = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return (
        <div className = {`display ${value.length > 7 ? 'length' : ''}` } >
            {num}
        </div>
    )
}
