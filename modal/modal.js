const modalBtn = document.getElementById("modalBtn");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

modalBtn.addEventListener("click", function () {
  modal.classList.add("is-active");
  modal.setAttribute("aria-hidden", "false");
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("is-active");
  modal.setAttribute("aria-hidden", "true");
});

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.remove("is-active");
    modal.setAttribute("aria-hidden", "true");
  }
});
