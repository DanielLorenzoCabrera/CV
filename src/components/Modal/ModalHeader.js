import { useDispatch } from "react-redux";
import { closeAll } from "../../features/modalSlice";

const ModalHeader = () => {
  const dispatch = useDispatch();
  return (
    <div className="modal-header">
      <article
        className="modal-icon close"
        onClick={() => dispatch(closeAll())}
      >
        <span>x</span>
      </article>
      <article
        className="modal-icon minimize"
        onClick={() => dispatch(closeAll())}
      ><span>&#8213;</span></article>
      <article className="modal-icon expand">
        <span>&#60;&#62;</span>
      </article>
    </div>
  );
};

export default ModalHeader;
