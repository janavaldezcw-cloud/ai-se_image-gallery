import { decks } from "./decks.js";
import { renderCarouselView } from "./carousel.js";
import { renderDeckView, findDeckById } from "./deck-view.js";
import { confirmDelete } from "./confirmation-modal.js";

const pageEl = document.querySelector(".page");
const homeSection = document.querySelector("#home");
const carouselSection = document.querySelector("#carousel");
const deckViewSection = document.querySelector("#deck-view");
const aboutSection = document.querySelector("#about");
const notFoundSection = document.querySelector("#not-found");

const homeListEl = homeSection.querySelector(".gallery__list");
const deckTemplateEl = document.querySelector("#deck-template");

let currentDeck = null;

const practiceBtn = deckViewSection.querySelector(".gallery__practice-btn");
practiceBtn.addEventListener("click", () => {
  if (currentDeck) {
    window.location.hash = `deck/${currentDeck.id}/practice`;
  }
});

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

function renderHomeView() {
  homeListEl.innerHTML = "";
  decks.forEach((deck) => {
    homeListEl.append(createDeckEl(deck));
  });
}

function hideAllSections() {
  homeSection.style.display = "none";
  carouselSection.style.display = "none";
  deckViewSection.style.display = "none";
  aboutSection.style.display = "none";
  notFoundSection.style.display = "none";
  pageEl.classList.add("page_no-mobile-bar");
  pageEl.classList.remove("page_location_carousel");
}

function router() {
  const hash = window.location.hash.slice(1) || "home";
  const practiceMatch = hash.match(/^deck\/(.+)\/practice$/);
  const deckMatch = hash.match(/^deck\/(.+)$/);

  hideAllSections();

  if (hash === "home" || hash === "") {
    pageEl.classList.remove("page_no-mobile-bar");
    homeSection.style.display = "block";
    renderHomeView();
  } else if (hash === "about") {
    aboutSection.style.display = "block";
  } else if (practiceMatch) {
    const deck = findDeckById(practiceMatch[1]);
    if (deck) {
      currentDeck = deck;
      pageEl.classList.add("page_location_carousel");
      carouselSection.style.display = "block";
      renderCarouselView(deck);
    } else {
      notFoundSection.style.display = "flex";
    }
  } else if (deckMatch) {
    const deck = findDeckById(deckMatch[1]);
    if (deck) {
      currentDeck = deck;
      pageEl.classList.remove("page_no-mobile-bar");
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
