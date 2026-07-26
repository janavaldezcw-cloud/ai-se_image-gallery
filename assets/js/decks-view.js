import { decks } from "./decks.js";
import { confirmDelete } from "./confirmation-modal.js";

const decksSection = document.querySelector("#decks");
const listEl = decksSection.querySelector(".gallery__list");
const deckTemplateEl = document.querySelector("#deck-template");

function createDeckEl(deck) {
  const cloneEl = deckTemplateEl.content.querySelector("li").cloneNode(true);
  cloneEl.style.setProperty("--card-color", deck.color);

  const linkEl = cloneEl.querySelector(".card__link");
  linkEl.href = `#deck/${deck.id}`;
  linkEl.setAttribute("aria-label", `Open ${deck.name} deck`);

  cloneEl.querySelector(".card__title").textContent = deck.name;
  cloneEl.querySelector(".card__count").textContent =
    `${deck.cards.length} cards`;

  const deleteBtn = cloneEl.querySelector(".card__action-btn_type_delete");
  deleteBtn.addEventListener("click", () => {
    confirmDelete(cloneEl);
  });

  return cloneEl;
}

function renderDecksView() {
  listEl.innerHTML = "";
  decks.forEach((deck) => {
    listEl.append(createDeckEl(deck));
  });
}

export { renderDecksView };
