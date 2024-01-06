import { React, useState, useEffect } from "react";
import "./modal.scss";

const Modal = (props) => {
  const closeModal = () => {
    props.callback();
  };

  useEffect(() => {
    const listen = (event) => {
      if (event.target.className === "modal modal-container active") {
        closeModal();
      }
    };
    if (props.active) {
      document.body.addEventListener("click", listen);
    }
    return () => {
      document.body.removeEventListener("click", listen);
    };
  }, [props.active]);
  return (
    <div>
      <div className={`modal modal-container ${props.active ? "active" : ""}`}>
        <div className="modal__inner">
          <div className="modal__nav">
            <button
              onClick={(e) => {
                closeModal(e);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clipPath="url(#clip0_1552_23693)">
                  <path
                    d="M13.5 0.5L0.5 13.5"
                    stroke="#000001"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M0.5 0.5L13.5 13.5"
                    stroke="#000001"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1552_23693">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <div className="modal__content">{props.comp}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
