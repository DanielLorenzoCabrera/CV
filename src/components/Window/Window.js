import "../../styles/Window.css";
import { useState } from "react";
import MainNavBar from "../MainNavBar/MainNavBar";
import AuxNavBar from "../AuxNavBar/AuxNavBar";
import ModalContainer from "../Modal/ModalContainer";

const Window = (props) => {
  const [className, updateClassName] = useState("macOS");
  return (
    <div className={`window ${className}`}>
      <AuxNavBar className={className} />
      <ModalContainer className={className}/>
      <MainNavBar files={[]} />
    </div>
  );
};

export default Window;
