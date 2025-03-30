(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-33",headers:{authorization:"8aed8deb-0dc7-4c24-b29b-7da60c3908ed","Content-Type":"application/json"}},t=document.querySelector(".popup__form"),n=t.querySelector(".popup__input"),r=(t.querySelector(".".concat(n.id,"-error")),function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}),o=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},c=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){n.setCustomValidity(""),n.classList.remove(t.inputErrorClass);var r=e.querySelector(".".concat(n.id,"-error"));r&&(r.textContent="",r.classList.remove(t.errorClass))})),r.disabled=!0,r.classList.add(t.inactiveButtonClass)};function a(e,t,n,r,o){var c=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),a=c.querySelector(".card__image"),i=c.querySelector(".card__title"),u=c.querySelector(".card__delete-button"),s=c.querySelector(".card__like-button"),l=c.querySelector(".card__like-count");return a.src=e.link,i.textContent=e.name,a.alt="".concat(e.name),l.textContent=e.likes.length,e.likes.some((function(e){return e._id===o}))&&s.classList.add("card__like-button_is-active"),e.owner._id!==o?u.remove():u.addEventListener("click",(function(){t(c,e._id)})),s.addEventListener("click",(function(){var t=s.classList.contains("card__like-button_is-active");n(e._id,t,s,l)})),a.addEventListener("click",r),c}function i(t,n){(function(t){return fetch("".concat(e.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))})(n).then((function(){t.remove()})).catch((function(e){console.error("Ошибка при удалении карточки: ".concat(e))}))}function u(t,n,r,o){(function(t,n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(t),{method:n?"DELETE":"PUT",headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))})(t,n).then((function(e){r.classList.toggle("card__like-button_is-active"),o.textContent=e.likes.length})).catch((function(e){console.error("Ошибка при изменении лайка: ".concat(e))}))}var s=function(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&p(t)}},l=function(e){e.target.classList.contains("popup_is-opened")&&p(e.target)},d=function(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",s)},p=function(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",s)};function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var _,m={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},y=document.querySelector(".places__list"),v=document.querySelector(".profile__edit-button"),h=document.querySelector(".profile__add-button"),S=document.querySelectorAll(".popup__close"),b=document.querySelector(".profile__image"),g=document.querySelectorAll(".popup"),q=document.querySelector(".popup_type_edit"),C=document.querySelector(".popup_type_new-card"),E=document.querySelector(".popup_type_image"),L=document.querySelector(".popup_type_update-image"),k=E.querySelector(".popup__image"),j=E.querySelector(".popup__caption"),x=document.forms["edit-profile"],A=document.forms["new-place"],P=document.forms["update-avatar"],M=x.querySelector(".popup__input_type_name"),T=x.querySelector(".popup__input_type_description"),U=P.querySelector(".popup__input_type_avatar-url"),w=A.querySelector(".popup__input_type_card-name"),B=A.querySelector(".popup__input_type_url"),O=document.querySelector(".profile__title"),D=document.querySelector(".profile__description"),V=document.querySelector(".profile__image"),I=x.querySelector(".popup__button"),N=A.querySelector(".popup__button"),J=P.querySelector(".popup__button");function H(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранение...";e?(t.dataset.originalText=t.textContent,t.textContent=n):t.textContent=t.dataset.originalText||"Сохранить"}function z(e){O.textContent=e.name,D.textContent=e.about,V.style.backgroundImage="url(".concat(e.avatar,")")}function R(e){k.src=e.target.src,k.alt=e.target.alt,j.textContent=e.target.alt,d(E)}Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)})),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];_=o._id,z(o),function(e){e.forEach((function(e){var t=a(e,i,u,R,_);y.append(t)}))}(c)})).catch((function(e){return console.error("Ошибка загрузки данных: ".concat(e))})),S.forEach((function(e){e.addEventListener("click",(function(){var t=e.closest(".popup");t&&p(t)}))})),g.forEach((function(e){e.addEventListener("click",l)})),v.addEventListener("click",(function(){M.value=O.textContent,T.value=D.textContent,c(x,m),d(q)})),h.addEventListener("click",(function(){c(A,m),d(C)})),b.addEventListener("click",(function(){c(P,m),d(L)})),x.addEventListener("submit",(function(t){t.preventDefault();var n=M.value,r=T.value;H(!0,I),function(t,n){return fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}(n,r).then((function(e){z(e),p(q)})).catch((function(e){return console.error("Ошибка загрузки данных: ".concat(e))})).finally((function(){return H(!1,I)}))})),A.addEventListener("submit",(function(t){t.preventDefault();var n,r,o=w.value,c=B.value;o&&c&&(H(!0,N),(n=o,r=c,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:n,link:r})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))).then((function(e){var t=a(e,i,u,R,_);y.prepend(t),p(C),A.reset()})).catch((function(e){return console.error("Ошибка загрузки данных: ".concat(e))})).finally((function(){return H(!1,N)})))})),P.addEventListener("submit",(function(t){t.preventDefault();var n=U.value;H(!0,J),function(t){return fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}(n).then((function(e){z(e),p(L),P.reset()})).catch((function(e){return console.error("Ошибка загрузки данных: ".concat(e))})).finally((function(){return H(!1,J)}))})),function(e){Array.from(document.querySelectorAll(".popup__form")).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),c=e.querySelector(t.submitButtonSelector);n.forEach((function(a){a.addEventListener("input",(function(){!function(e,t,n){t.validity.valueMissing?t.setCustomValidity(t.dataset.errorMessage):t.validity.tooShort?t.setCustomValidity(t.dataset.errorLengthMessage):t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorRulesMessage):t.validity.typeMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?o(e,t,n):r(e,t,t.validationMessage,n)}(e,a,t),function(e,t,n){t.validity.valid?o(e,t,n):r(e,t,t.validationMessage,n)}(e,a,t),function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))}(n,c,t)}))}))}(t,e)}))}(m)})();