//import React from "react";
import MainNavBarFile from "./MainNavBarFile";
import infoNavBarItems from './infoNavBarItems.json'

const MainNavBar = ({files}) => {
    console.log(infoNavBarItems)
  return (
    <div className="mainNavBar">
      {infoNavBarItems.map(file => {
          return <MainNavBarFile text={file.name}/>
      })}
    </div>
  );
};

export default MainNavBar;
