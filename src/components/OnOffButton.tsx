import React from 'react';

import ButtonTimerUI from './UI/ButtonTimerUI';

interface OnOffButtonProps {
  onClick: () => void;
  state: boolean;
  text: string | string[]
}

const OnOffButton: React.FC<OnOffButtonProps> = ({ onClick, state, text }) => {

  const textBotton = () => {
      return !state ? <>{text[0]}</> : <>{text[1]}</>

  }

  return (
    <button style={ButtonTimerUI} onClick={onClick}>
      {textBotton()}
    </button>
  );
}

export default OnOffButton;