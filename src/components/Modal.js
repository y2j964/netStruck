import React from 'react';
import ReactDOM from 'react-dom';
import { useFilmValues, useFilmGetSet } from '../context';
import Close from '../icons/Close';

export default function Modal({ children }) {
  const { state } = useFilmValues();
  const { modalIsOpen } = state;
  const { dispatch } = useFilmGetSet();

  const toggleSearchModal = () => dispatch({ type: 'TOGGLE_MODAL' });
  // document.querySelector('html').classList.toggle('scroll-lock');

  if (!modalIsOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className='modal'>
      <div className='modal__header flex p-5'>
        <h2 className='sr-only'>Search NetStruck Films</h2>
        <button
          className='ml-auto'
          aria-label='close modal'
          onClick={toggleSearchModal}
        >
          <Close />
        </button>
      </div>
      {children}
    </div>,
    document.getElementById('modal-root'),
  );
}
