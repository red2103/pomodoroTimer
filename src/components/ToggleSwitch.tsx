import React, { useState } from "react";
import "./UI/ToggleSwitchUI.css";



interface ToggleSwitchProps {
  id: string;
  checked: boolean
  func: () => void
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ id, checked, func}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    setIsChecked(!isChecked)
    func()
  };

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        id={id}
      />
      <label htmlFor={id} className="slider"></label>
    </div>
  );
};

export default ToggleSwitch;