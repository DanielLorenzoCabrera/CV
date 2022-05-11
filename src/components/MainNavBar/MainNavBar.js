import React, { useState } from "react";
import MainNavBarFile from "./MainNavBarFile";
import infoNavBarItems from "./infoNavBarItems.json";

const MainNavBar = ({ files }) => {
  const [prevSibling, assingPrevSibling] = useState(null);

  const updatePrevSibling = (hoveredFileNumber) => {
    assingPrevSibling(
      hoveredFileNumber - 1 >= 0 ? hoveredFileNumber - 1 : null
    );
  };
  
  const removePrevSibling = () => {
    assingPrevSibling(null)
  }

  return (
    <div className="mainNavBar">
      <div className="navBarItemContainer">
        {infoNavBarItems.map((file, index) => {
          return (
            <MainNavBarFile
              text={file.name}
              key={index}
              fileNumber={index}
              updatePrevSibling={updatePrevSibling}
              removePrevSibling={removePrevSibling}
              className={'prevSibling'}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainNavBar;
