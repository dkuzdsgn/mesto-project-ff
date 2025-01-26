// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Вывести карточки на страницу

// @todo: Темплейт карточки

// @todo: Функция удаления карточки

const cardsList = document.querySelector(".places__list");

function createCard(cardData, deleteCallback) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  cardElement.querySelector(".card__image").src = cardData.link;
  cardElement.querySelector(".card__title").textContent = cardData.name;
  cardElement.querySelector(".card__image").alt = `${cardData.name}`;

  const deleteButton = cardElement.querySelector(".card__delete-button");

  deleteButton.addEventListener("click", function () {
    deleteCallback(cardElement);
  });

  return cardElement;
}

function deleteCard(cardElement) {
  cardElement.remove();
}

initialCards.forEach((cardData) => {
  const card = createCard(cardData, deleteCard);
  cardsList.append(card);
});
