import React from "react";
import style from './Display.module.css'

type DisplayType = {
    value:number
    colorMax:number
}

export function Display(props:DisplayType) {
    const color = props.value === props.colorMax ? style.h1 : ''
    return (
        <div className={style.display}>
           <h1 className={color}> {props.value} </h1>
        </div>
    )
}