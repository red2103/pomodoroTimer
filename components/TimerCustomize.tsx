import React, {useDeferredValue, useState} from "react";
import TimerContainer from "./TimerContainer";
import RangeSlider from "./RangeSlider"

const timeDefault: {
    defaultRangeValuePomodoro: number;
    defaultRangeValueRest: number;
    defaultRangeValueLongRest: number;
    } = {
    defaultRangeValuePomodoro: 20,
    defaultRangeValueRest: 5,
    defaultRangeValueLongRest: 15,
    };

    // function OnOffButton() {
    //     const [state, changeState] = useState('on');
      
    //     function change() {
    //       if (state == "on") {
    //         changeState('off')
    //       } else { 
    //         changeState('on')
    //       }
    //     }
      
    //     return (
    //       <button onClick={change}>
    //         {state} 
    //       </button>
    //     );
    //   }


      

const TimerSetting = () => {
    const [pomodoro, setPomodoro] = useState(timeDefault.defaultRangeValuePomodoro);
    const [rest, setRest] = useState(timeDefault.defaultRangeValueRest)    
    const [longRest, setLongRest] = useState(timeDefault.defaultRangeValueLongRest)
    const [rangeValuePomodoro, setRangeValuePomodoro] = useState(timeDefault.defaultRangeValuePomodoro)
    const [rangeValueRest, setRangeValueRest] = useState(timeDefault.defaultRangeValueRest)
    const [rangeValuelongRest, setRangeValuelongRest] = useState(timeDefault.defaultRangeValueLongRest)
    const [stateAutoPomodoroActive, setAutoPomodoro ] = useState(false)
    const [stateAutoRestActive, setAutoRest ] = useState(true) 


    const runSettings = () => {
        setPomodoro(rangeValuePomodoro)
        setRest(rangeValueRest)
        setLongRest(rangeValuelongRest)
    }

    const changeStateAutoPomodoro = () => {
        if (stateAutoPomodoroActive) {
            setAutoPomodoro(false)
        } else {
            setAutoPomodoro(true)
        }
    }


    const changeStateAutoRest = () => {
        if (stateAutoRestActive) {
            setAutoRest(false)
        } else {
            setAutoRest(true)
        }
    }

    const buttonView = (state: boolean) => {
        if (state) {
            return 'on'
        } else {
            return 'off'
        }
    }

    // const changeState = (func: (s: boolean) => void, state: boolean): void => {
    //     if (state) {
    //         func(false);
    //     } else {
    //         func(true)
    //     }
    // };

    // const func_test = (state: boolean) => {
    //     if (state) {
    //         console.log(autoRestActive)

    //         changeStateAutoRest(false);
    //         console.log(autoRestActive)
    //     } else {
    //         console.log(autoRestActive)

    //         changeStateAutoRest(true)
    //         console.log(autoRestActive)

    //     }
    // } 

    

    // func_test(true)

    // function change() {
    //     if (state == props.on) {
    //         changeState(props.off)
    //     } else {
    //         changeState(props.on)
    //     }
    // }

    return (
        <div>
            <TimerContainer pomodoro={pomodoro * 60} rest={rest * 60} longRest={longRest * 60} autoPomodoro={stateAutoPomodoroActive} autoRest={stateAutoRestActive} />


        <p>Audio settings:</p>


            <div>
            {rangeValuePomodoro + ' min pomodoro'}
            <br />
            <RangeSlider
            min={1}
            max={100}
            value={rangeValuePomodoro}
            onChange={(e) => {
                setRangeValuePomodoro(+e.target.value)
            }}
            /> 
            <br /> 
{/* ---------------------------------------------------- */}
            {rangeValueRest + ' min rest'}
            <br />
            <RangeSlider
            min={1}
            max={100}
            value={rangeValueRest}
            onChange={(e) => {
                setRangeValueRest(+e.target.value)
            }}
            /> 
            <br />
{/* ---------------------------------------------------- */}

            {rangeValuelongRest + ' min long rest'}
            <br />
            <RangeSlider
            min={1}
            max={100}
            value={rangeValuelongRest}
            onChange={(e) => {
                setRangeValuelongRest(+e.target.value)
            }}
            /> 
            </div>
            <div>
                <button onClick={changeStateAutoPomodoro}>{buttonView(stateAutoPomodoroActive)}</button> pomodoro
                <br />
                <button onClick={changeStateAutoRest}>{buttonView(stateAutoRestActive)}</button> rest
            </div>
            <button onClick={runSettings}>OK</button>
        </div>
        
    )
}




export default TimerSetting