export function createCard(cardData, deleteCallback, likeCallback, imageClickCallback) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");

  cardImage.src = cardData.link;
  cardTitle.textContent = cardData.name;
  cardImage.alt = `${cardData.name}`;

  deleteButton.addEventListener("click", function () {
    deleteCallback(cardElement);
  });

  likeButton.addEventListener('click', function() {
    likeCallback(likeButton);
  })

  cardImage.addEventListener("click", function (evt) {
    imageClickCallback(evt);
  });

  return cardElement;
}

export function deleteCard(cardElement) {
  cardElement.remove();
}

export function likeCard(button) {
   button.classList.toggle("card__like-button_is-active");
}