const confirmationModalEl = document.querySelector("#confirmation-modal");
const cancelBtn = confirmationModalEl.querySelector(".modal__btn_type_cancel");
const confirmBtn = confirmationModalEl.querySelector(
  ".modal__btn_type_confirm",
);

let currentCardEl = null;

cancelBtn.addEventListener("click", () => {
  confirmationModalEl.classList.remove("modal_visible");
  currentCardEl = null;
});

confirmBtn.addEventListener("click", () => {
  currentCardEl.remove();
  confirmationModalEl.classList.remove("modal_visible");
  currentCardEl = null;
});

function confirmDelete(cardEl) {
  currentCardEl = cardEl;
  confirmationModalEl.classList.add("modal_visible");
}

export { confirmDelete };
