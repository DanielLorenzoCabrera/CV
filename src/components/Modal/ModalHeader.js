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
        <span>
          <i class="fa-solid fa-xmark"></i>
        </span>
      </article>
      <article
        className="modal-icon minimize"
        onClick={() => dispatch(closeAll())}
      >
        <span>
          <i class="fa-solid fa-minus"></i>
        </span>
      </article>
      <article className="modal-icon expand">
        <span>
          <i class="fa-solid fa-maximize"></i>
        </span>
      </article>
    </div>
  );
};

export default ModalHeader;
