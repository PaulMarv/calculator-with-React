import React from 'react';
import "./Button.css"

export const Buttons = ({content, type, onButtonClick, operator, view}) => {
    return (
        <div className ={`Button ${content==='0'? 'zero': ""} ${type || ''}
         ${view !=="0"&&content === operator ? 'highlighted':''}`} 
             onClick={onButtonClick(content)}
             >
            {content}
        </div>
    )
}
