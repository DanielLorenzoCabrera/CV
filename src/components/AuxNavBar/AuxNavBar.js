import { macOS } from "./AuxNavBarItems";
import { getDate } from "../../utils/Functions";
import {useState} from "react"

const AuxNavBar = ({ className }) => {


  const renderOS = () => {
    const { classes, siriIcon } = macOS;
    return <div className="auxNavBar">
        {Object.values(classes).map((icon, index)=>{
            return <i className={icon} key={index}></i>
        })}
        <figure>
            <img src={siriIcon} alt="" />
        </figure>
        <p className="datetime">{getDate()}</p>
    </div>;
  };
  if (className === "macOS") return renderOS();
  return <div className="auxNavBar"></div>;
};

export default AuxNavBar;
