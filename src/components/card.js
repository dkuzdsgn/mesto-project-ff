import { deleteServerCard, addOrRemoveLike } from "../scripts/api.js";

export function createCard(cardData, deleteCallback, likeCallback, imageClickCallback, userId) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  const likeCount = cardElement.querySelector(".card__like-count");

  cardImage.src = cardData.link;
  cardTitle.textContent = cardData.name;
  cardImage.alt = `${cardData.name}`;
  likeCount.textContent = cardData.likes.length;

// Проверка: лайкал ли текущий пользователь
const isLiked = cardData.likes.some(like => like._id === userId);
if (isLiked) {
  likeButton.classList.add("card__like-button_is-active");
}

// Проверка: владелец ли текущий пользователь
if (cardData.owner._id !== userId) {
  deleteButton.remove(); // Чужую карточку нельзя удалять
} else {
  deleteButton.addEventListener("click", () => {
    deleteCallback(cardElement, cardData._id);
  });
}

// Обработка лайка
likeButton.addEventListener("click", () => {
  const currentlyLiked = likeButton.classList.contains("card__like-button_is-active");
  likeCallback(cardData._id, currentlyLiked, likeButton, likeCount);
});

// Открытие попапа с изображением
cardImage.addEventListener("click", imageClickCallback);

return cardElement;
}
// Функция удаления карточки (отправка запроса и удаление из DOM)
export function deleteCard(cardElement, cardId) {
  deleteServerCard(cardId)
    .then(() => {
      cardElement.remove();
    })
    .catch((err) => {
      console.error(`Ошибка при удалении карточки: ${err}`);
    });
}

// Функция лайка/дизлайка
export function likeCard(cardId, isLiked, likeButton, likeCount) {
  addOrRemoveLike(cardId, isLiked)
    .then((updatedCard) => {
      likeButton.classList.toggle("card__like-button_is-active");
      likeCount.textContent = updatedCard.likes.length;
    })
    .catch((err) => {
      console.error(`Ошибка при изменении лайка: ${err}`);
    });
}

//   deleteButton.addEventListener("click", function () {
//     deleteCallback(cardElement);
//   });

//   likeButton.addEventListener('click', function() {
//     likeCallback(likeButton);
//   })

//   cardImage.addEventListener("click", function (evt) {
//     imageClickCallback(evt);
//   });

//   return cardElement;
// }

// export function deleteCard(cardElement) {
//   cardElement.remove();
// }

// export function likeCard(button) {
//    button.classList.toggle("card__like-button_is-active");
// }

