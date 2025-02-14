import React, { useEffect } from "react"

import TimerWindowUI from "./UI/TimerWindowUI";
interface TimerWindowProps {
    stateTimer: boolean;
    runTimer: (stateTimer: boolean) => void
    next: () => void
    time: number;
    setTime: (value: React.SetStateAction<number>) => void
}

const TimerWindow: React.FC<TimerWindowProps> = ({ stateTimer, runTimer, next, time, setTime}) => {
    useEffect(() => {
        if (stateTimer) {
            const countdownInterval = setInterval(() => {
                const currentTime = Math.floor( new Date().getTime() / 1000) ;
                const eventTime = currentTime + time
                let remainingTime = eventTime - currentTime  - 1;
        
                if (time <= 0) {
                  remainingTime = 0;
                  setTimeout(() => {
                    runTimer(false)
                    next()
                  }, 10);
                  clearInterval(countdownInterval);
                }
                setTime(remainingTime);

              }, 1000); 
              return () => clearInterval(countdownInterval);
        }
    });
      
  const countdownDisplay = (timeNow: number) => {
      const minutes = Math.floor(timeNow / 60)
      const seconds = timeNow % 60
      return minutes + ':' + (seconds <= 10 ? '0' + seconds : seconds);
  }

  return (
    <>
      <div style={TimerWindowUI}>
          {countdownDisplay(time)}
      </div>
    </>
  )
}
export default TimerWindow