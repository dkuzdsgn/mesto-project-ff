import { enableValidation, clearValidation } from "../components/validation";

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

import {
  getUserInfo,
  getInitialCards,
  editUserProfile,
  addNewCard,
  updateUserAvatar,
} from "../scripts/api";

import { createCard, deleteCard, likeCard } from "../components/card";

import { openModal, closeModal, handleOverlayClick } from "../components/modal";

const cardsList = document.querySelector(".places__list");

const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const closePopupButtons = document.querySelectorAll(".popup__close");
const updateAvatarButton = document.querySelector(".profile__image");

const popups = document.querySelectorAll(".popup");
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const popupTypeImage = document.querySelector(".popup_type_image");
const popupTypeUpdateImage = document.querySelector(".popup_type_update-image");

const popupImgElement = popupTypeImage.querySelector(".popup__image");
const popupCaption = popupTypeImage.querySelector(".popup__caption");

const profileForm = document.forms["edit-profile"];
const cardForm = document.forms["new-place"];
const updateAvatarForm = document.forms["update-avatar"];

const nameInput = profileForm.querySelector(".popup__input_type_name");
const jobInput = profileForm.querySelector(".popup__input_type_description");
const avatarInput = updateAvatarForm.querySelector(
  ".popup__input_type_avatar-url"
);

const placeNameInput = cardForm.querySelector(".popup__input_type_card-name");

const linkInput = cardForm.querySelector(".popup__input_type_url");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileAvatar = document.querySelector(".profile__image");

const profileSubmitButton = profileForm.querySelector(".popup__button");
const cardSubmitButton = cardForm.querySelector(".popup__button");
const avatarSubmitButton = updateAvatarForm.querySelector(".popup__button");

let userId;

function renderLoading(
  isLoading,
  buttonElement,
  loadingText = "Сохранение..."
) {
  if (isLoading) {
    buttonElement.dataset.originalText = buttonElement.textContent;
    buttonElement.textContent = loadingText;
  } else {
    buttonElement.textContent =
      buttonElement.dataset.originalText || "Сохранить";
  }
}

function updateUserInfo(userData) {
  profileTitle.textContent = userData.name;
  profileDescription.textContent = userData.about;
  profileAvatar.style.backgroundImage = `url(${userData.avatar})`;
}

function renderCards(cards) {
  cards.forEach((cardData) => {
    const card = createCard(
      cardData,
      deleteCard,
      likeCard,
      handleImageClick,
      userId
    );
    cardsList.append(card);
  });
}

Promise.all([getUserInfo(), getInitialCards()])
  .then(([userData, cards]) => {
    userId = userData._id;
    updateUserInfo(userData);
    renderCards(cards);
  })
  .catch((err) => console.error(`Ошибка загрузки данных: ${err}`));

function handleImageClick(evt) {
  popupImgElement.src = evt.target.src;
  popupImgElement.alt = evt.target.alt;
  popupCaption.textContent = evt.target.alt;

  openModal(popupTypeImage);
}

function handleAvatarSubmit(evt) {
  evt.preventDefault();

  const avatarLink = avatarInput.value;

  renderLoading(true, avatarSubmitButton);

  updateUserAvatar(avatarLink)
    .then((updatedUser) => {
      updateUserInfo(updatedUser);
      closeModal(popupTypeUpdateImage);
      updateAvatarForm.reset();
    })
    .catch((err) => console.error(`Ошибка загрузки данных: ${err}`))
    .finally(() => renderLoading(false, avatarSubmitButton));
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const name = nameInput.value;
  const job = jobInput.value;

  renderLoading(true, profileSubmitButton);

  editUserProfile(name, job)
    .then((updatedUserData) => {
      updateUserInfo(updatedUserData);
      closeModal(popupTypeEdit);
    })
    .catch((err) => console.error(`Ошибка загрузки данных: ${err}`))
    .finally(() => renderLoading(false, profileSubmitButton));
}

function handleNewCardSubmit(evt) {
  evt.preventDefault();

  const cardName = placeNameInput.value;
  const cardLink = linkInput.value;

  if (cardName && cardLink) {
    renderLoading(true, cardSubmitButton);

    addNewCard(cardName, cardLink)
      .then((cardDataFromServer) => {
        const newCard = createCard(
          cardDataFromServer,
          deleteCard,
          likeCard,
          handleImageClick,
          userId
        );

        cardsList.prepend(newCard);
        closeModal(popupTypeNewCard);
        cardForm.reset();
      })
      .catch((err) => console.error(`Ошибка загрузки данных: ${err}`))
      .finally(() => renderLoading(false, cardSubmitButton));
  }
}

closePopupButtons.forEach((button) => {
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
  clearValidation(profileForm, validationConfig);
  openModal(popupTypeEdit);
});

addCardButton.addEventListener("click", function () {
  clearValidation(cardForm, validationConfig);
  openModal(popupTypeNewCard);
});

updateAvatarButton.addEventListener("click", function () {
  clearValidation(updateAvatarForm, validationConfig);
  openModal(popupTypeUpdateImage);
});

profileForm.addEventListener("submit", handleProfileFormSubmit);
cardForm.addEventListener("submit", handleNewCardSubmit);
updateAvatarForm.addEventListener("submit", handleAvatarSubmit);

enableValidation(validationConfig);
