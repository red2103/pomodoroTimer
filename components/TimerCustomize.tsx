import React, {useDeferredValue, useState} from "react";
import TimerContainer from "./TimerContainer";
import RangeSlider from "./RangeSlider"
import OnOffButton from "./OnOffButton";

// interface buttonProps {
//     on: string;
//     off: string; 
//     description: string;
// }

// const OnOffButton: React.FC<buttonProps>  = (props) =>{
//     const [state, changeState] = useState(props.on);
    
//     function change() {
//         if (state == props.on) {
//             changeState(props.off)
//         } else {
//             changeState(props.on)
//         }
//     }
    
//     return (
//         <div>
//             <button onClick={change}>{state}</button> {props.description}
//         </div>

//     );
// }


const timeDefault: {
    defaultRangeValuePomodoro: number;
    defaultRangeValueRest: number;
    defaultRangeValueLongRest: number;
    } = {
    defaultRangeValuePomodoro: 20,
    defaultRangeValueRest: 5,
    defaultRangeValueLongRest: 15,
    };


const TimerSetting = () => {
    const [Pomodoro, setPomodoro] = useState(timeDefault.defaultRangeValuePomodoro);
    const [Rest, setRest] = useState(timeDefault.defaultRangeValueRest)    
    const [longRest, setLongRest] = useState(timeDefault.defaultRangeValueLongRest)
    const [rangeValuePomodoro, setRangeValuePomodoro] = useState(timeDefault.defaultRangeValuePomodoro)
    const [rangeValueRest, setRangeValueRest] = useState(timeDefault.defaultRangeValueRest)
    const [rangeValuelongRest, setRangeValuelongRest] = useState(timeDefault.defaultRangeValueLongRest)
    const [autoPomodoroActive, changeStateAutoPomodoro ] = useState(false)
    const [autoRestActive, changeStateAutoRest ] = useState(true) 


    const runSettings = () => {
        setPomodoro(rangeValuePomodoro)
        setRest(rangeValueRest)
        setLongRest(rangeValuelongRest)
    }




    return (
        <div>
            {/* <TimerContainer pomodoro={Pomodoro * 60} rest={Rest * 60} longRest={longRest * 60} autoActive={false} autoRest={false}/> */}
            <TimerContainer pomodoro={1} rest={2} longRest={3} autoPomodoro={autoPomodoroActive} autoRest={autoRestActive} />


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
                <OnOffButton 
                on={'on'} 
                off={'off'} 
                description={'auto pomodoro'} 
                state={autoPomodoroActive}
                onChange={(e) => {
                    changeStateAutoPomodoro(state)
                }} 
                />
                
                {/* <OnOffButton on={'on'} off={'off'} description={'auto rest'}/> */}


            </div>
            <button onClick={runSettings}>OK</button>
        </div>
        
    )
}




export default TimerSetting