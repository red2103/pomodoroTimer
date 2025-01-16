import React, {useEffect, useState} from "react";

interface TimerSettingProps {
    pomodoro: number;
    rest: number;
    longRest: number;
    autoRest: boolean;
    autoPomodoro: boolean;
    
}

const timeDefault: {
    defaultState: string;
} = {
    defaultState: 'pomodoro'
}

const countCycle: {
    countPomodoro: number;
    countRest: number;
    countLongRest: number;
    
} = {
    countPomodoro: 3,
    countRest: 0,
    countLongRest: 0,
}

// const TimerSetting: {
//     pomodoro: number;
//     Rest: number;
//     longRest: number;
// } = {
//     pomodoro: 0,
//     Rest: 0,
//     longRest: 0,
// }
 
const TimerContainer: React.FC<TimerSettingProps> = (props) => {
    const [stateStatus, statusСhange] = useState(timeDefault.defaultState)
    const [timeRemaining, setTime] = useState(props.pomodoro);
    const [countdownStarted, setCountdownStarted] = useState(false);

    
    useEffect(() => {
        if (countdownStarted) {
            const countdownInterval = setInterval(() => {
                const currentTime = Math.floor( new Date().getTime() / 1000) ;
                const eventTime = currentTime + timeRemaining
                let remainingTime = eventTime - currentTime  - 1;
        
                if (timeRemaining <= 0) {
                  remainingTime = 0;
                  setTimeout(() => {
                    setCountdownStarted(false)

                  }, 10);

                  addCountCycle()

                  clearInterval(countdownInterval);
                  
                }
                setTime(remainingTime);

              }, 1000); 
              return () => clearInterval(countdownInterval);
        }
        if (timeRemaining == 0) {
            autoRunTimer() 
            changingStates()
        }

    }, [countdownStarted, timeRemaining])

    // не react

    const changeLinkButton = () => {
        if (!countdownStarted) {
            return 'START'

        } else {
            return 'STOP'
        }
    }

    const countdownDisplay = () => {
        const minutes = Math.floor(timeRemaining / 60)
        const seconds = timeRemaining % 60
        return minutes + ':' + (seconds <= 10 ? '0' + seconds : seconds);
    }
    
    const checkoutState = () => {
        if (stateStatus == 'pomodoro') {
            setTime(props.pomodoro)
        } else if (stateStatus == 'rest') {
            setTime(props.rest)
        } else if (stateStatus == 'longRest') {
            setTime(props.longRest)
        } else {
            console.log('not state')
        }
    }

    const addCountCycle = () => {
        if (stateStatus == 'pomodoro') {
            countCycle.countPomodoro += 1
        } else if (stateStatus == 'Rest') {
            countCycle.countRest += 1
        } else if (stateStatus == 'longRest') {
            countCycle.countLongRest += 1
        }
    }

    const changingStates = () => {
        
        if (stateStatus == 'pomodoro' && countCycle.countPomodoro != 0 && countCycle.countPomodoro % 5 == 0) {
            statusСhange('longRest')
            setTime(props.longRest)
        } else if (stateStatus == 'pomodoro') {
            statusСhange('rest')
            setTime(props.rest)
        } else {
            statusСhange('pomodoro')
            setTime(props.pomodoro)
        }
    }

    const autoRunTimer = () => {
        if (props.autoRest && stateStatus == 'pomodoro') {
            setTimeout(() => {
                setCountdownStarted(true)
            }, 1);           
            
            
        } else if (props.autoPomodoro && stateStatus == 'rest') {
        }
          
    }

    // const checkoutSitting = () => {
    //     if (TimerSetting.pomodoro != props.pomodoro || TimerSetting.longRest != props.longRest || TimerSetting.longRest != props.longRest) {

    //         TimerSetting.pomodoro = props.pomodoro
    //         TimerSetting.longRest = props.longRest
    //         TimerSetting.longRest = props.longRest
    //     }
    // }


    // --------- обработчик событий -----------------------------------------------------------------



    const handleClick = () => {
        setCountdownStarted(!countdownStarted)
        checkoutState()
        // changeLinkButton()
    }

    const statePomodoro = () => {
        statusСhange('pomodoro')
        setCountdownStarted(false)
        setTime(props.pomodoro)
        // changeLinkButton()

    } 

    const stateRest = () => {
        statusСhange('rest')
        setCountdownStarted(false)
        setTime(props.rest)
        // changeLinkButton()

    } 

    const stateLongRest = () => {
        statusСhange('longRest')
        setCountdownStarted(false)
        setTime(props.longRest)
        // changeLinkButton()

    } 

    return (
        <div>
            <div>
                <button onClick={statePomodoro}>Pomodoro</button>
                <button onClick={stateRest}>Rest</button>
                <button onClick={stateLongRest}>long Rest</button>
            </div>
            <div>{stateStatus}</div>
            <br />
            <div>
                <span >
                    {countdownDisplay()}
                </span>
            </div>
            <button onClick={handleClick}>{changeLinkButton()}</button>
        </div>
    )
}

export default TimerContainer