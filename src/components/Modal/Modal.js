/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import FocusTrap from "focus-trap-react";
import { CSSTransition } from "react-transition-group";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import {
  useNetStruckDataState,
  useNetStruckDataDispatcher
} from "../../NetStruckDataContext";
import Close from "../../icons/Close";

export default function Modal({ children, autoFocusCloseBtn }) {
  const { state } = useNetStruckDataState();
  const { modalIsOpen } = state;
  const dispatch = useNetStruckDataDispatcher();
  const closeRef = useRef();
  const modalRef = useRef();

  useEffect(() => {
    if (modalIsOpen) {
      if (autoFocusCloseBtn) {
        closeRef.current.focus();
      }
      disableBodyScroll(modalRef.current);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [modalIsOpen, autoFocusCloseBtn]);

  useEffect(() => {
    console.log("mode");
    // enableBodyScroll(modalRef.current)
  }, []);

  const toggleSearchModal = () => {
    dispatch({ type: "TOGGLE_MODAL" });
  };

  const handleKeyDown = e => {
    const key = e.key || e.code;
    if (key !== "Escape") {
      return;
    }
    toggleSearchModal();
  };

  return ReactDOM.createPortal(
    <CSSTransition
      in={modalIsOpen}
      timeout={1300}
      unmountOnExit
      classNames="modal"
    >
      <FocusTrap>
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalHeading"
          onKeyDown={handleKeyDown}
          ref={modalRef}
        >
          {/* <div className='overflow-x-hidden'> */}
          <div className="modal__header">
            <h2 className="sr-only" id="modalHeading">
              Search NetStruck Films
            </h2>
            <button
              className="ml-auto"
              aria-label="close modal"
              ref={closeRef}
              onClick={toggleSearchModal}
            >
              <Close />
            </button>
          </div>
          {children}
          {/* </div> */}
        </div>
      </FocusTrap>
    </CSSTransition>,
    document.getElementById("modal-root")
  );
}
