const handleEscKeyUp = (evt) => {
  if (evt.key === "Escape") {
    const openPopup = document.querySelector(".popup_is-opened");
    if (openPopup) {
      closeModal(openPopup);
    }
  }
};

export const handleOverlayClick = (evt) => {
  const openPopup = document.querySelector(".popup_is-opened");
  if (openPopup) {
    closeModal(evt.target)
  }
}

export const openModal = (popup) => {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscKeyUp);
};

export const closeModal = (popup) => {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscKeyUp);
};



