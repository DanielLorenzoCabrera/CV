import { Component } from "react";
import { useSelector } from "react-redux";
import ModalMac from "./ModalMac";
import  Items  from '../MainNavBar/infoNavBarItems.json'

const ModalContainer = ({ className }) => {
  const isSelected = (key, selected) => key === selected;
  const {selected} = useSelector((state) => state.modal);

  if (className === "macOS") {
    return (
      <div className="modalContainer">
        {Items.map((item, key) => {
          return (
            <ModalMac
              key={key}
              className={item.defaultClass}
              displayed={isSelected(key, selected)}
            />
          );
        })}
      </div>
    );
  }
};

export default ModalContainer;
