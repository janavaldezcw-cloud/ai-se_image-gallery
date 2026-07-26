import { images } from "./images.js";
import { renderCarouselView } from "./carousel.js";
import { renderDecksView } from "./decks-view.js";
import { renderDeckView, findDeckById } from "./deck-view.js";
import { confirmDelete } from "./confirmation-modal.js";

const homeSection = document.querySelector("#home");
const decksSection = document.querySelector("#decks");
const carouselSection = document.querySelector("#carousel");
const deckViewSection = document.querySelector("#deck-view");
const notFoundSection = document.querySelector("#not-found");

let currentDeck = null;

const practiceBtn = deckViewSection.querySelector(".gallery__practice-btn");
practiceBtn.addEventListener("click", () => {
  if (currentDeck) {
    window.location.hash = `deck/${currentDeck.id}/practice`;
  }
});

function renderHomeView() {
  const imageTemplateEl = document.querySelector("#image-template");
  const imageContainerEl = homeSection.querySelector(".gallery__list");
  imageContainerEl.innerHTML = "";

  function createImageEl(item) {
    const cloneEl = imageTemplateEl.content.querySelector("li").cloneNode(true);

    const imageEl = cloneEl.querySelector(".card__image");
    imageEl.src = item.src;
    imageEl.alt = item.alt;

    const likeBtn = cloneEl.querySelector(".card__btn_type_like");
    likeBtn.addEventListener("click", () => {
      likeBtn.classList.toggle("card__btn_type_like-filled");
    });

    const deleteBtn = cloneEl.querySelector(".card__btn_type_delete");
    deleteBtn.addEventListener("click", () => {
      confirmDelete(cloneEl);
    });

    return cloneEl;
  }

  function renderImageEl(item) {
    const imageEl = createImageEl(item);
    imageContainerEl.prepend(imageEl);
  }

  images.forEach(renderImageEl);
}

/**
 * Main router function that handles hash changes.
 * Reads the current hash and renders the appropriate view.
 */
function router() {
  const hash = window.location.hash.slice(1) || "home";
  const practiceMatch = hash.match(/^deck\/(.+)\/practice$/);
  const deckMatch = hash.match(/^deck\/(.+)$/);

  homeSection.style.display = "none";
  decksSection.style.display = "none";
  carouselSection.style.display = "none";
  deckViewSection.style.display = "none";
  notFoundSection.style.display = "none";

  if (hash === "home" || hash === "") {
    homeSection.style.display = "block";
    renderHomeView();
  } else if (hash === "decks") {
    decksSection.style.display = "block";
    renderDecksView();
  } else if (hash === "carousel") {
    carouselSection.style.display = "block";
    renderCarouselView(images);
  } else if (practiceMatch) {
    const deck = findDeckById(practiceMatch[1]);
    if (deck) {
      currentDeck = deck;
      carouselSection.style.display = "block";
      renderCarouselView(deck.cards);
    } else {
      notFoundSection.style.display = "flex";
    }
  } else if (deckMatch) {
    const deck = findDeckById(deckMatch[1]);
    if (deck) {
      currentDeck = deck;
      deckViewSection.style.display = "block";
      renderDeckView(deck);
    } else {
      notFoundSection.style.display = "flex";
    }
  } else {
    notFoundSection.style.display = "flex";
  }
}

window.addEventListener("DOMContentLoaded", router);
window.addEventListener("hashchange", router);
