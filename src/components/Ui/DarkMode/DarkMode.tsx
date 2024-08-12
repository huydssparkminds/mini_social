import React from "react";
import "./style.scss";
import useDarkMode from "@/hooks/useDarkMode";
const DarkMode = () => {
  const { enabled, setEnabled } = useDarkMode();
  const toggleTheme = () => {
    setEnabled(!enabled);
  };
  return (
    <div>
      <label className="ui-switch">
        <input type="checkbox" checked={enabled} onChange={toggleTheme} />
        <div className="slider">
          <div className="circle"></div>
        </div>
      </label>
    </div>
  );
};

export default DarkMode;
