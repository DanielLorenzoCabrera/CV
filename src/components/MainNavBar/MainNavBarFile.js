import React from "react";

const MainNavBarFile = ({ text, fileNumber, addClasses, className, removeClasses, classIcon}) => {
  return (
    <div className={`mainNavBarFile ${className}`} onMouseEnter={() => addClasses(fileNumber)} onMouseLeave={() => removeClasses()}>
      <p className="navBarFileInfo">{text}</p>
      <i className={classIcon}></i>
    </div>
  );
};

export default MainNavBarFile;
