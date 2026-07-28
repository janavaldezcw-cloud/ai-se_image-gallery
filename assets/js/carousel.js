function renderCarouselView(deck) {
  let currentIndex = 0;
  let isFlipped = false;

  const carouselEl = document.querySelector(".carousel");
  const titleEl = carouselEl.querySelector(".carousel__title");
  const cardEl = carouselEl.querySelector(".carousel__card");
  const textEl = carouselEl.querySelector(".carousel__text");
  const leftBtn = carouselEl.querySelector(".carousel__btn_type_left");
  const rightBtn = carouselEl.querySelector(".carousel__btn_type_right");
  const flipBtn = carouselEl.querySelector(".carousel__btn_type_flip");

  function disableButton(buttonEl) {
    buttonEl.classList.add("carousel__btn_disabled");
    buttonEl.disabled = true;
  }
  function enableButton(buttonEl) {
    buttonEl.classList.remove("carousel__btn_disabled");
    buttonEl.removeAttribute("disabled");
  }

  function updateArrows() {
    if (currentIndex === 0) {
      disableButton(leftBtn);
    } else {
      enableButton(leftBtn);
    }

    if (currentIndex === deck.cards.length - 1) {
      disableButton(rightBtn);
    } else {
      enableButton(rightBtn);
    }
  }

  function updateDisplay() {
    const card = deck.cards[currentIndex];

    titleEl.textContent =
      `${deck.name} (${currentIndex + 1}/${deck.cards.length})`;
    textEl.textContent = isFlipped ? card.back : card.front;
    cardEl.classList.toggle("carousel__card_flipped", isFlipped);
    cardEl.style.setProperty("--card-color", deck.color);

    updateArrows();
  }

  rightBtn.addEventListener("click", () => {
    if (currentIndex < deck.cards.length - 1) {
      currentIndex++;
      isFlipped = false;
      updateDisplay();
    }
  });

  leftBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      isFlipped = false;
      updateDisplay();
    }
  });

  flipBtn.addEventListener("click", () => {
    isFlipped = !isFlipped;
    updateDisplay();
  });

  updateDisplay();
}

export { renderCarouselView };
