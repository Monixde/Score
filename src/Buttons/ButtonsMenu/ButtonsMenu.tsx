import React from "react";
import {Button} from "../Button/Button";
import style from './Buttons.module.css'

type ButtonsType = {
    value: number
    setFunction: () => void
    getStorage: () => void
    title:string
    Disabled?: number

}

export function ButtonsMenu(props: ButtonsType) {
    return (
        <div className={style.button}>
            <Button Disabled={props.Disabled} title={props.title} value={props.value} addFunction={props.setFunction}/>
            <div>
                <button onClick={props.getStorage} >Reset</button>
            </div>
        </div>
    )
}