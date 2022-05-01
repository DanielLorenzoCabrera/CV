//import React from "react";
import MainNavBarFile from "./MainNavBarFile";
import infoNavBarItems from "./infoNavBarItems.json";

const MainNavBar = ({ files }) => {
  console.log(infoNavBarItems);
  return (
    <div className="mainNavBar">
      <div className="navBarItemContainer">
        {infoNavBarItems.map((file, index) => {
          return <MainNavBarFile text={file.name} fileNumber={index} selected={'example'}/>;
        })}
      </div>
    </div>
  );
};

export default MainNavBar;
