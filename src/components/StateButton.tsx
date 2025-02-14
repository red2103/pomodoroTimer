import React from 'react';

import ButtonTimerUI from './UI/ButtonTimerUI';
import ButtonTimerActiveUI from './UI/ButtonTimerActiveUI';

interface StateButtonProps {
    text: "Pomodoro" | "Short Break" | "Long Break"
    statePomodoro: string
    runTimer: (stateTimer: boolean) => void
    getTime: (state: "Pomodoro" | "Short Break" | "Long Break") => void

}

const StateButton: React.FC<StateButtonProps> = ({text, statePomodoro, runTimer, getTime}) => {

  const changeState = () => {
    
    runTimer(false)
    getTime(text)
  }

  function style() {
    if (text == statePomodoro) {
        return ButtonTimerActiveUI 
    }
    else {
        return ButtonTimerUI
    }
  }

  
  return (
    <>
<button onClick={() => changeState()} style={style()}>{text}</button>
    </>
  );
}

export default StateButton

