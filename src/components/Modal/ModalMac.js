import { Component } from "react";
import ModalHeader from "./ModalHeader";
import About from "../Sections/About";
class ModalMac extends Component {
  render() {
    return (
      <div className="modal">
        <ModalHeader />
        <About/>
      </div>
    );
  }
}

export default ModalMac;
