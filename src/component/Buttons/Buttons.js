import React from 'react';
import "./Button.css"

export const Buttons = ({content, type, onButtonClick, operator}) => {
    return (
        <div className ={`Button ${content==='0'? 'zero': ""} ${type || ''}
         ${content === operator ? 'highlighted':''}`} 
             onClick={onButtonClick(content)}
             >
            {content}
        </div>
    )
}
