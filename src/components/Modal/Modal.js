import * as React from "react";
import "./Modal.scss";
import PropTypes from "prop-types";

function Modal({ children, onClick, onNullClick, cancel, className }) {
  return (
    <div
      className={`myModal ${className ? className : ""}`}
      onClick={(e) => onClick && onClick(e)}
    >
      <div className="modalBlock">
        <ModelContentBlock
          onClick={(e) => onClick && onClick(e)}
          onNullClick={onNullClick}
          cancel={cancel}
        >
          {children}
        </ModelContentBlock>
      </div>
    </div>
  );
}

const ModelContentBlock = ({ children, onNullClick, onClick, cancel }) => {
  return (
    <div className="modalWrapper position-relative">
      <div className="closeModal position-absolute">
        {cancel ? (
          <img
            onClick={onClick}
            src={require("../../assets/img/svg/cancel-icon.svg")}
            alt=""
          />
        ) : (
          ""
        )}
      </div>
      <div
        className="modalBlock-content"
        onClick={(e) => onNullClick && onNullClick(e)}
      >
        {children}
      </div>
    </div>
  );
};

Modal.ContentBlock = ModelContentBlock;

Modal.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  onNullClick: PropTypes.func,
  className: PropTypes.string,
};

export default Modal;
