import { Component } from "react";
import ModalHeader from "./ModalHeader";
import { About, Knowledge } from "../Sections";
import { renderSection } from "../Sections/SectionsTypes";

const ModalMac = ({ className, displayed }) => {
  const visible = displayed ? "visible" : "invisible";
  //const items = [<Knowledge />, <About />];

  return (
    <div className={`modal ${visible}`}>
      <ModalHeader />
      {renderSection[className]}
    </div>
  );
};

export default ModalMac;
