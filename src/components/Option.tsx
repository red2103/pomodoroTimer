import React from 'react';

import Setting from './Setting';

import ToggleSwitch from './ToggleSwitch';
import RangeSlider from './RangeSlider';
import './UI/OptionUI.css'

interface OptionProps {
    setting: Setting,
    viewOption: (view: boolean) => void,
    view: boolean,
    setTime: (time: number) => void
}

const Option: React.FC<OptionProps> = ({ setting, viewOption, view, setTime }) => {

    const autoStartBreak = () => {
        setting.autoRunTimer.Break = !setting.autoRunTimer.Break
    }

    const autoStartPomodoro = () => {
        setting.autoRunTimer.Pomodoro =! setting.autoRunTimer.Pomodoro
    }

    const ChangeTime = (value: number, cycle: 'Pomodoro' | 'Short Break' | 'Long Break') => {
        setting.TimerSetting.timeCycle[cycle] = value
        setTime(value)
    }

    return (
    <div className='window' >
        <>{view ? 
            <div className='option' style={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '12px',
            }} >  
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    
                }}>                    
                    <p style={{
                        display: 'flex',
                        fontSize: '26px',
                        
                    }} >Option</p>

                    <button onClick={() => viewOption(false)} style={{
                        border: '0px',
                        cursor: 'pointer',                    
                        padding: '0px',
                        height: '40px'
                    }}> 
                        <img style={{
                            width: '40px',
                        }} src="dist/close.svg" /> 
                    </button>

                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <p>Auto Start Break</p>
                    <ToggleSwitch id={'1'} checked={setting.autoRunTimer.Break} func={autoStartBreak}/>

                </div>
                <hr style={{
                        margin: '0px',
                        flexShrink: '0',
                        borderWidth: '0px 0px thin',
                        borderStyle: 'solid',
                        borderColor: 'rgb(236, 236, 236)'
                }}/>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <p>Auto Start Pomodoro</p>
                    <ToggleSwitch id={'2'} checked={setting.autoRunTimer.Pomodoro} func={autoStartPomodoro}/>

                </div>
                <hr style={{
                        margin: '0px',
                        flexShrink: '0',
                        borderWidth: '0px 0px thin',
                        borderStyle: 'solid',
                        borderColor: 'rgb(236, 236, 236)'
                }}/>
                <RangeSlider onChange={ChangeTime} cycle='Pomodoro' count={setting.TimerSetting.timeCycle['Pomodoro']}/>
                <hr style={{
                        margin: '0px',
                        flexShrink: '0',
                        borderWidth: '0px 0px thin',
                        borderStyle: 'solid',
                        borderColor: 'rgb(236, 236, 236)'
                }}/>
                <RangeSlider onChange={ChangeTime} cycle='Short Break' count={setting.TimerSetting.timeCycle['Short Break']}/>
                <hr style={{
                        margin: '0px',
                        flexShrink: '0',
                        borderWidth: '0px 0px thin',
                        borderStyle: 'solid',
                        borderColor: 'rgb(236, 236, 236)'
                }}/>
                <RangeSlider onChange={ChangeTime} cycle='Long Break' count={setting.TimerSetting.timeCycle['Long Break']}/>

            </div>
        : <></>}</>
    </div>
  );
}

export default Option