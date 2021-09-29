import React from 'react';
import commaClass from '../../utils/commaClass';
import './Display.css';

export const Display = ({value, total, view,sight, calc, history}) => {

    
    return (
        <div>
            <div className={`calculation ${sight[sight.length > 8 ? 'length': '']}`}>{sight}</div>
            <div className={`total ${value[value.length > 8 ? 'lengthy': '']}`}>
                { total===true ?commaClass(value): "" }
            </div>
        </div>
    )
}
