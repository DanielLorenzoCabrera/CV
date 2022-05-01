import "../../styles/Window.css";

import MainNavBar from "../MainNavBar/MainNavBar";

const Window = (props) => {
  return (
    <div className="window macOS">
      <div style={{flex :5}}></div>
      <MainNavBar files={[]} />
    </div>
  );
};

export default Window;
