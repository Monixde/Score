import React, {ChangeEvent} from "react";
import style from './Display.module.css'
import {Button} from "../Buttons/Button/Button";

type DisplayType = {
    Maxvalue: number
    StartValue: number
    addMaxValueFunction: () => void
    reAddMaxValueFunction: () => void
    addStartValueFunction: () => void
    reAddStartValueFunction: () => void

}

export function DisplayMenu(props: DisplayType) {


    //const color = props.Maxvalue === 5 ? style.h1 : ''

    return (
        <div className={style.display}>
            <p>
                Max Value:
                <div>
                    {props.Maxvalue}

                    <div className={style.button}>
                        <Button value={''} title={'<'} addFunction={props.reAddMaxValueFunction}/>
                        <Button value={''} title={'>'} addFunction={props.addMaxValueFunction}/>
                    </div>

                </div>
            </p>

                <p>
                    Start Value:
                    <div>
                        {props.StartValue}

                        <div className={style.button}>
                            <Button value={''} title={'<'} addFunction={props.reAddStartValueFunction}/>
                            <Button value={''} title={'>'} addFunction={props.addStartValueFunction}/>
                        </div>

                    </div>
                </p>



        </div>

            )
            }