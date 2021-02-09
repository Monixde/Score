import React from "react";
import {Button} from "../Button/Button";
import style from './Buttons.module.css'

type ButtonsType = {
    value: number
    addFunction: () => void
    Reset: () => void
    title: string
    Disabled:number

}

export function ButtonsScore(props: ButtonsType) {
    return (
        <div className={style.button}>
            <div className={style.b}>
                <Button Disabled={props.Disabled} title={props.title} value={props.value} addFunction={props.addFunction}/>

                <div>
                    <button onClick={props.Reset} disabled={props.value === 0}>Reset</button>
                </div>
            </div>
        </div>
    )
}