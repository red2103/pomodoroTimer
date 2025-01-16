import { useState } from 'react'
import TimerContainer from '../components/TimerContainer.js'
import TimerSetting from '../components/TimerCustomize.js'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {


  function MyButton() {
    const [count, setCount] = useState(0);

    
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <button onClick={handleClick}>
        Clicked {count}
      </button>
    );
  }
  

  return (
    
      <TimerSetting></TimerSetting>

    
  )
}

export default App
