import React from 'react';

import ButtonTimerActiveUI from './UI/ButtonTimerActiveUI';

interface NextButtonProps {
  next: () => void
  state: boolean,
}

const NextButton: React.FC<NextButtonProps> = ({ state, next }) => {
  const img = '>>'
  return (
    <>{state ? <button style={ButtonTimerActiveUI} onClick={next}>{img}</button> : <></>}</>
  );
}

export default NextButton