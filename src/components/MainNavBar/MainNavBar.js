import React, { useState } from "react";
import MainNavBarFile from "./MainNavBarFile";
import infoNavBarItems from "./infoNavBarItems.json";

const MainNavBar = () => {
  const [classes, updateClasses] = useState({
    prevSibling: null,
    actual: null,
    nextSibling: null,
  });

  const addClasses = (hoveredFileNumber) => {
    const prev = hoveredFileNumber - 1 >= 0 ? hoveredFileNumber - 1 : null;
    const next =
      hoveredFileNumber + 1 <= infoNavBarItems.length
        ? hoveredFileNumber + 1
        : null;
    updateClasses({
      ...classes,
      prevSibling: prev,
      actual: hoveredFileNumber,
      nextSibling: next,
    });
  };

  const assignClassName = (classes, index) => {
    return (index === classes.prevSibling) && "sibling";
  };

  const removeClasses = () => {
    updateClasses({
      ...classes,
      prevSibling: null,
      actual: null,
      nextSibling: null,
    });
  };

  return (
    <div className="mainNavBar">
      <div className="navBarItemContainer">
        {infoNavBarItems.map((file, index) => {
          const {name, classIcon, defaultClass} = file;
          return (
            <MainNavBarFile
              text={name}
              key={index}
              fileNumber={index}
              addClasses={addClasses}
              className={[assignClassName(classes, index)]}
              removeClasses={removeClasses}
              classIcon={classIcon}
              defaultClass={defaultClass}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainNavBar;
