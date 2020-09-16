import React, {useState} from 'react'

import './Input.css'

export default function Input(props){
    return(
        <div style={{width: "60%"}}>
          <label className="label-format" for={props.nameTag}>
            {props.labelString}
          </label>
          <input
            onChange={props.onChange}
            id={props.nameTag}
            type={props.type}
            name={props.nameTag}
            class="search"
          ></input>
        </div>
    )
}