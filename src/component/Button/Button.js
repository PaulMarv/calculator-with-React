import React from 'react';
import './Button.css';

export const Button = ({content,equiv, type, onButtonClick}) => {
    return (
        <div className ={`Button ${content==='='? 'equals': ""} ${type || ''}`}
        onClick ={onButtonClick(content, equiv)}>
            {content!=="#" ?content: 
            <div><i class=" fa fa-window-close"></i></div>}
        </div>
    )
}
