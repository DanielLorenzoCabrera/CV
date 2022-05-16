import React from "react";

const MainNavBarFile = ({
  text,
  fileNumber,
  addClasses,
  className,
  removeClasses,
  classIcon,
  defaultClass,
}) => {
  return (
    <div
      className={`mainNavBarFile ${className} ${defaultClass}`}
      onMouseEnter={() => addClasses(fileNumber)}
      onMouseLeave={() => removeClasses()}
    >
      <p className="navBarFileInfo">{text}</p>
      <i className={classIcon}></i>
    </div>
  );
};

export default MainNavBarFile;
