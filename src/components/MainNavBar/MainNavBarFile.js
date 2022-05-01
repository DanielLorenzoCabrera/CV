import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";

const MainNavBarFile = ({ text, fileNumber }) => {
  return (
    <div className={'mainNavBarFile'}>
      <p className="navBarFileInfo">{fileNumber}</p>
      <FontAwesomeIcon className="brain icon" icon={faBrain} />
    </div>
  );
};

export default MainNavBarFile;
