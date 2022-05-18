import "../../styles/Window.css";
import { useState } from "react";
import MainNavBar from "../MainNavBar/MainNavBar";
import AuxNavBar from "../AuxNavBar/AuxNavBar";

const Window = (props) => {
  const [className, updateClassName] = useState('macOS')
  return (
    <div className={`window ${className}`}>
      <AuxNavBar className={className}/>
      <div style={{ flex: 5 }}></div>
      <MainNavBar files={[]} />
    </div>
  );
};

export default Window;
