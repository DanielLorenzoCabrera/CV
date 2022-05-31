import { useDispatch } from "react-redux";
import { closeAll } from "../../features/modalSlice";

const ModalHeader = () => {
  const dispatch = useDispatch();
  return (
      <div className="modal-header">
        <article className="modal-icon close" onClick={() => dispatch(closeAll())}></article>
        <article className="modal-icon minimize" onClick={() => dispatch(closeAll())}></article>
        <article className="modal-icon expand"></article>
      </div>
  );
};

export default ModalHeader;
