/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import FocusTrap from 'focus-trap-react';
import { useFilmValues, useFilmGetSet } from '../context';
import Close from '../icons/Close';

export default function Modal({ children }) {
  const { state } = useFilmValues();
  const { modalIsOpen } = state;
  const { dispatch } = useFilmGetSet();
  const closeRef = useRef();

  useEffect(() => {
    if (modalIsOpen) {
      closeRef.current.focus();
    }
  }, [modalIsOpen]);

  const toggleSearchModal = () => {
    dispatch({ type: 'TOGGLE_MODAL' });
  };

  const handleKeyDown = e => {
    const key = e.key || e.code;
    if (key !== 'Escape') {
      return;
    }
    toggleSearchModal();
  };

  if (!modalIsOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <FocusTrap>
      <div
        className={`modal${modalIsOpen && ' modal--is-open'}`}
        role='dialog'
        aria-modal='true'
        aria-labelledby='modalHeading'
        onKeyDown={handleKeyDown}
      >
        <div className='modal__header'>
          <h2 className='sr-only' id='modalHeading'>
            Search NetStruck Films
          </h2>
          <button
            className='ml-auto'
            aria-label='close modal'
            ref={closeRef}
            onClick={toggleSearchModal}
          >
            <Close />
          </button>
        </div>
        {children}
      </div>
    </FocusTrap>,
    document.getElementById('modal-root'),
  );
}
