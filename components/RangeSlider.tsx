import React from 'react';

interface RangeSliderProps {
  value: number;
  min: number;
  max: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  customClasses?: string;
  secondaryBgColor?: string;
}

const RangeSlider: React.FC<RangeSliderProps> = (props) => {
  const percentage = 100 * (props.value - props.min) / (props.max - props.min);
  const rangerStyle: React.CSSProperties = {
    background: `linear-gradient(90deg, var(--primary-600) 0%, var(--orange-500) ${percentage}%, ${props.secondaryBgColor || 'var(--default-color)'} ${percentage + 0.1}%)`,
  };

  return (
    <input
      className={`range-slider-input ${props.customClasses || ''}`}
      type="range"
      value={props.value}
      min={props.min}
      max={props.max}
      onChange={props.onChange}
      disabled={props.disabled}
    />
  );
};

export default RangeSlider;