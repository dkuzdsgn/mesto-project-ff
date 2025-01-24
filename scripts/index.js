// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Вывести карточки на страницу

// @todo: Темплейт карточки

// @todo: Функция удаления карточки

const addCard = initialCards.forEach(function (el) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardsList = document.querySelector(".places__list");
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  cardElement.querySelector(".card__image").src = el.link;
  cardElement.querySelector(".card__title").textContent = el.name;

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", function (event) {
    const card = event.target.closest(".card");
    deleteCard(card);
  });

  cardsList.append(cardElement);
});

function deleteCard(cardElement) {
  cardElement.remove();
}
