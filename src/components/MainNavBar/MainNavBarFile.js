import React from "react";
import { useDispatch } from "react-redux";
import { changeSelected } from "../../features/modalSlice";


const MainNavBarFile = ({
  text,
  fileNumber,
  addClasses,
  className,
  removeClasses,
  classIcon,
  defaultClass,
}) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`mainNavBarFile ${className} ${defaultClass}`}
      onMouseEnter={() => addClasses(fileNumber)}
      onMouseLeave={() => removeClasses()}
      onClick={() => dispatch(changeSelected(fileNumber))}
    >
      <p className="navBarFileInfo">{text}</p>
     <i className={classIcon}></i>
    </div>
  );
};

export default MainNavBarFile;
