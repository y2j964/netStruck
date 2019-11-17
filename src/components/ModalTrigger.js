import React from "react";
import SearchGlass from "../icons/SearchGlass";
import { useNetStruckDataDispatcher } from "../NetStruckDataContext";

export default function ModalTrigger() {
  const dispatch = useNetStruckDataDispatcher();
  const openSearchModal = () => dispatch({ type: "OPEN_MODAL" });

  return (
    <button aria-label="search for film" onClick={openSearchModal}>
      <SearchGlass fill="#fff" />
    </button>
  );
}
