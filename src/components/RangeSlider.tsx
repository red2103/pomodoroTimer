import React, { useState } from 'react';

import './UI/RangeSliderUI.css'

interface RangeSliderProps {
  onChange: (value: number, cycle: 'Pomodoro' | 'Short Break' | 'Long Break') => void;
  cycle: 'Pomodoro' | 'Short Break' | 'Long Break'
  count: number
}

const RangeSlider: React.FC<RangeSliderProps> = ({ onChange, cycle, count}) => {
  const [value, setValue] = useState(count / 60);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    onChange(newValue * 60, cycle);
  };

  return (
    <>
        <p>{cycle}</p>
    <div className='RangeSlider'>

      <input
        type="range"
        min={1}
        max={100}
        value={value}
        onChange={handleChange}
      />
      <p className='value'>{value}</p>
    </div>
    </>
  );
};

export default RangeSlider;