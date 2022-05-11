import React from "react";

const MainNavBarFile = ({ text, fileNumber, updatePrevSibling, removePrevSibling }) => {
  return (
    <div className={'mainNavBarFile'} onMouseEnter={() => updatePrevSibling(fileNumber)} onMouseLeave={()=> removePrevSibling()} >
      <p className="navBarFileInfo">{fileNumber}</p>
      <i className="fa-solid fa-brain"></i>
    </div>
  );
};

export default MainNavBarFile;
