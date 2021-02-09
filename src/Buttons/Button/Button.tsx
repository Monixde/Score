import React from "react";

type ButtonType ={
    value: number|string
    title: any
    addFunction: ()=>void
    Disabled?:number
}

export function Button(props:ButtonType) {
    return (
        <div>
            <button disabled={props.value === props.Disabled} onClick={props.addFunction}>
                {props.title}
            </button>
        </div>
    )
}