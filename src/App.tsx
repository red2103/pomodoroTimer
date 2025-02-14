import { useState } from 'react'

import TimerWindow from './components/TimerWindow'
import ButtonTimer from './components/ButtonTimer'
import NextButton from './components/NextButton'
import StateButton from './components/StateButton'
import RestartButton from './components/RestartButton.tsx'
import Setting from './components/Setting'

import './App.css'
import styleContainer from './components/UI/ContainerUI.tsx'
import headerUI from './components/UI/HeaderUI.tsx'
import ListStateButtonUI from './components/UI/ListStateButtonUI.tsx'


const setting: Setting = {
  TimerSetting: {
    timeCycle: {
      'Pomodoro': 1200,
      'Short Break': 300,
      'Long Break': 900
    },
    offLongBreak: false,
  },
  countCycle: {
    'Pomodoro': 1,
    'Short Break': 1,
    'Long Break': 1,
  },
  autoRunTimer: {
    'Pomodoro': false,
    'Break': true,
  },
  State: 'Pomodoro',
};



const App: React.FC = () => {
  const [statePomodoro, setStatePomodoro] = useState(setting.State)
  const [stateTimer, runTimer] = useState(false)
  const [time, setTime] = useState(setting.TimerSetting.timeCycle['Pomodoro'])

  const getTime = (state: 'Pomodoro' | 'Short Break'| 'Long Break') => {
    setTime(setting.TimerSetting.timeCycle[state])
    setStatePomodoro(state)
  }

  const next = () => {
    if (setting.TimerSetting.offLongBreak) {
      if (statePomodoro == 'Pomodoro') {
        setting.countCycle['Pomodoro'] += 1
        runTimer(setting.autoRunTimer['Break'])
        getTime('Short Break')
      } else if (statePomodoro == 'Short Break'){
        setting.countCycle['Short Break'] += 1
        runTimer(setting.autoRunTimer['Pomodoro'])
        getTime('Pomodoro')
      }
    } else 
    
    {
      if (setting.countCycle['Pomodoro'] % 5 == 0 && statePomodoro == 'Pomodoro') {
        setting.countCycle['Pomodoro'] += 1
        runTimer(setting.autoRunTimer['Break'])
        getTime('Long Break')
      } else if (statePomodoro == 'Pomodoro') {
        setting.countCycle['Pomodoro'] +=1
        runTimer(setting.autoRunTimer['Break'])
        getTime('Short Break')
      } else if (statePomodoro == 'Short Break') {
        setting.countCycle['Short Break'] += 1
        runTimer(setting.autoRunTimer['Pomodoro'])
        getTime('Pomodoro')
      } else if (statePomodoro == 'Long Break') {
        setting.countCycle['Long Break'] += 1
        runTimer(setting.autoRunTimer['Pomodoro'])
        getTime('Pomodoro')
      }
    }
    
  }

  const handleClick = () => {
    runTimer(!stateTimer)
  }

  const restart = () => {
    runTimer(false)
    getTime(statePomodoro)
  }

  const getCountCycle = () => {
    return setting.countCycle[statePomodoro]
  }



  return (
    <>
      <header style={headerUI}>
        <h1>Pomodoro timer</h1>
        {/* <button onClick={() => console.log('option')} >option</button> */}
        {/* <button onClick={() => console.log('login')} >login</button> */}
      </header>

        <div style={ListStateButtonUI}>
          <StateButton text='Pomodoro'  statePomodoro={statePomodoro} runTimer={runTimer} getTime={getTime}/>
          <StateButton text='Short Break'  statePomodoro={statePomodoro} runTimer={runTimer} getTime={getTime}/>
          <StateButton text='Long Break'  statePomodoro={statePomodoro} runTimer={runTimer} getTime={getTime}/>
        </div>
        

        <TimerWindow stateTimer={stateTimer} runTimer={runTimer} next={next} time={time} setTime={setTime}/>
        <div style={{...styleContainer, fontSize: '1.25rem',}}>Count cycle: {getCountCycle()}</div>
        <div style={styleContainer}>
          <ButtonTimer onClick={handleClick} state={stateTimer} text={['START', 'STOP']}/>
          <NextButton state={time != setting.TimerSetting.timeCycle[statePomodoro]} next={next}/>
        </div>
        <RestartButton onClick={restart} state={time != setting.TimerSetting.timeCycle[statePomodoro]} text={'RESTART'}/>


    </>
  )
}

export default App 