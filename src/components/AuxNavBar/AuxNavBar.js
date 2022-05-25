import { macOS } from "./AuxNavBarItems";
import Clock from "../common/Clock";

const AuxNavBar = ({ className }) => {

  const renderOS = () => {
    const { classes, siriIcon } = macOS;
    return (
      <div className="auxNavBar">
        {Object.values(classes).map((icon, index) => {
          return <i className={icon} key={index}></i>;
        })}
        <figure>
          <img src={siriIcon} alt="" />
        </figure>
        <p className="datetime">
          <Clock />
        </p>
      </div>
    );
  };
  if (className === "macOS") return renderOS();
  return <div className="auxNavBar"></div>;
};

export default AuxNavBar;
