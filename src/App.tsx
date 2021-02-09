import React, {useEffect, useState} from 'react';
import './App.css';
import './App_1.css'
import {ButtonsScore} from "./Buttons/ButtonsScore/ButtonsScore";
import {Display} from "./DisplayScore/Display";
import {DisplayMenu} from "./DisplayMenu/DisplayMenu";
import {ButtonsMenu} from "./Buttons/ButtonsMenu/ButtonsMenu";



function App() {


    const [maxValue, setMaxValue] = useState(1)
    const [startValue, setStartValue] = useState(0)

    let [value, setValue] = useState(startValue)
    // function (){
    //     if()
    // }


    useEffect(()=>{
        const getStartValue = localStorage.getItem('2')
        if (getStartValue) {
            const newStartValue = JSON.parse(getStartValue)
            setStartValue(newStartValue)

        }

        const getMaxValue = localStorage.getItem('1')
        if (getMaxValue) {
            let newValue = JSON.parse(getMaxValue)
            setMaxValue(newValue)

        }
    },[])

    useEffect(()=>{
        localStorage.setItem('1', JSON.stringify(maxValue))

    },[maxValue])

    useEffect(()=>{

        localStorage.setItem('2', JSON.stringify(startValue))
    },[startValue])

    console.log(maxValue)

    let addFunction = () => {
        setValue(++value)
    }
    let addFunctionMax = () => {
        setMaxValue(maxValue + 1)
    }

    let reAadFunctionMax = () => {
        setMaxValue(maxValue - 1)
    }
    let addFunctionStart = () => {
        setStartValue(startValue + 1)
    }

    let reAadFunctionStart = () => {
        setStartValue(startValue - 1)
    }


    let reset = () => {
        setValue(value = 0)
    }

    const setFunction = () => {

        localStorage.setItem('1', JSON.stringify(maxValue))
        localStorage.setItem('2', JSON.stringify(startValue))
    }

    const getLocalStorage = () => {
        const getStartValue = localStorage.getItem('2')
        if (getStartValue) {
            const newStartValue = JSON.parse(getStartValue)
            setStartValue(newStartValue)

        }

        const getMaxValue = localStorage.getItem('1')
        if (getMaxValue) {
            let newValue = JSON.parse(getMaxValue)
            setMaxValue(newValue)

        }
    }

    return (
        <div className="App1">
            <div className="App">
                <Display
                    colorMax={maxValue}
                    value={value}
                />
                <ButtonsScore
                    title={'Add'}
                    addFunction={addFunction}
                    value={value}
                    Reset={reset}
                    Disabled={maxValue}
                />
            </div>
            <div className="App">
                <DisplayMenu
                    addStartValueFunction={addFunctionStart}
                    reAddStartValueFunction={reAadFunctionStart}
                    reAddMaxValueFunction={reAadFunctionMax}
                    addMaxValueFunction={addFunctionMax}
                    Maxvalue={maxValue}
                    StartValue={startValue}/>
                <ButtonsMenu  title={'Set'} setFunction={setFunction} value={maxValue} getStorage={getLocalStorage}/>
            </div>
        </div>
    );
}

export default App;
