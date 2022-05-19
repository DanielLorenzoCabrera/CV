import { macOS } from "./AuxNavBarItems";
import { getDate } from "../../utils/Functions";
import {useState, useEffect} from "react"

const AuxNavBar = ({ className }) => {

  const [date, setDate] = useState(new Date());
  useEffect(()=> {
    const timer = setInterval(() => tick(),1000);
    return function cleanup() {
      clearInterval(timer);
    };
  })

  const tick = () => setDate(new Date());

  const renderOS = () => {
    const { classes, siriIcon } = macOS;
    return <div className="auxNavBar">
        {Object.values(classes).map((icon, index)=>{
            return <i className={icon} key={index}></i>
        })}
        <figure>
            <img src={siriIcon} alt="" />
        </figure>
        <p className="datetime">{date.toLocaleTimeString()}</p>
    </div>;
  };
  if (className === "macOS") return renderOS();
  return <div className="auxNavBar"></div>;
};

export default AuxNavBar;
