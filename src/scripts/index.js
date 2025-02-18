import { initialCards } from "../components/cards";

import { createCard, deleteCard, likeCard } from "../components/card";

import { openModal, closeModal, handleOverlayClick } from "../components/modal";

const cardsList = document.querySelector(".places__list");

const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const ClosePopupButton = document.querySelectorAll(".popup__close");

const popups = document.querySelectorAll(".popup");
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const popupTypeImage = document.querySelector(".popup_type_image");

const formNewCard = popupTypeNewCard.querySelector(".popup__form");
const formElement = popupTypeEdit.querySelector(".popup__form");

const nameInput = formElement.querySelector(".popup__input_type_name");
const jobInput = formElement.querySelector(".popup__input_type_description");

const placeNameInput = formNewCard.querySelector(".popup__input_type_card-name");

const linkInput = formNewCard.querySelector(".popup__input_type_url");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

function handleImageClick(evt) {
  const popupImgElement = popupTypeImage.querySelector(".popup__image");
  const popupCaption = popupTypeImage.querySelector(".popup__caption");

  popupImgElement.src = evt.target.src;
  popupImgElement.alt = evt.target.alt;
  popupCaption.textContent = evt.target.alt;

  openModal(popupTypeImage);
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;

  closeModal(popupTypeEdit);
}

function handleNewCardSubmit(evt) {
  evt.preventDefault();

  const cardName = placeNameInput.value;
  const cardLink = linkInput.value;

  if (cardName && cardLink) {
    const newCard = createCard({ name: cardName, link: cardLink }, deleteCard, likeCard, handleImageClick);
    
    cardsList.prepend(newCard);

    closeModal(popupTypeNewCard);
    formNewCard.reset();
  }
}

ClosePopupButton.forEach((button) => {
  button.addEventListener("click", function () {
    const popup = button.closest(".popup");
    if (popup) {
      closeModal(popup);
    }
  });
});

popups.forEach((popup) => {
  popup.addEventListener("click", handleOverlayClick);
});

editProfileButton.addEventListener("click", function () {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(popupTypeEdit);
});

addCardButton.addEventListener("click", function () {
  openModal(popupTypeNewCard);
});

formElement.addEventListener("submit", handleFormSubmit);
formNewCard.addEventListener("submit", handleNewCardSubmit);

initialCards.forEach((cardData) => {
  const card = createCard(cardData, deleteCard, likeCard, handleImageClick);
  cardsList.append(card);
});
