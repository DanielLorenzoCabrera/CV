import { Component } from "react";
import ModalMac from "./ModalMac";

class ModalContainer extends Component {
  render() {
    const { className } = this.props;
    if (className === "macOS") {
      return (
        <div className="modalContainer">
          <ModalMac/>
        </div>
      );
    }
  }
}

export default ModalContainer;
