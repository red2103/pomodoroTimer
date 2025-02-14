import React from 'react';

import ButtonTimerUI from './UI/ButtonTimerUI';

interface ButtonTimerProps {
  onClick: () => void;
  state?: boolean;
  text: string | string[]
}

const ButtonTimer: React.FC<ButtonTimerProps> = ({ onClick, state, text }) => {

  const textBotton = () => {
    if (state != undefined) {
      return !state ? <>{text[0]}</> : <>{text[1]}</>
    } else {
      return text
    }
  }

  return (
    <button style={ButtonTimerUI} onClick={onClick}>
      {textBotton()}
    </button>
  );
}

export default ButtonTimer;