import React from 'react';

import ButtonTimerActiveUI from './UI/ButtonTimerActiveUI';
import styleContainer from './UI/ContainerUI';

interface RestartButtonProps {
  onClick: () => void;
  state: boolean;
  text: string | string[]
}

const RestartButton: React.FC<RestartButtonProps> = ({ onClick, state, text }) => {



  return (
    <>{state ? 
    <div style={styleContainer }>
      <button style={ButtonTimerActiveUI} onClick={onClick}>
        {text}
      </button>
    </div>
    : <></>}</>


  );
}

export default RestartButton;