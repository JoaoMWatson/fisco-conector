import React, {useState} from 'react'

import './Button.css'

export default function Button(props){
    const style={
        style:'none',
        border:0,
        borderRadius:90,
        width: 116,
        height: 33,
        fontSize:17,
        fontFamily:'"Scada", sans-serif',
        color:'white',
        cursor:'pointer'
    }
    
    return (
        <button onClick={props.onClick} className={props.color} style={style}  type={props.type}>
            {props.label}
        </button>
    )
}