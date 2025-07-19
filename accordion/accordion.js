const buttons = document.querySelectorAll(".accordion-btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const accordion = btn.closest(".accordion");
    const content = btn.nextElementSibling;
    const isOpen = accordion.classList.contains("is-open");
    document.querySelectorAll(".accordion.is-open").forEach((openAccordion) => {
      if (openAccordion !== accordion) {
        openAccordion.classList.remove("is-open");
        openAccordion.querySelector(".accordion-btn");
        openAccordion.querySelector(".accordion-content").style.maxHeight = 0;
      }
    });
    if (isOpen) {
      accordion.classList.remove("is-open");
      content.style.maxHeight = 0;
    } else {
      accordion.classList.add("is-open");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
document.addEventListener("click", (event) => {
  const clickedInsideAccordion = event.target.closest(".accordion");
  if (!clickedInsideAccordion) {
    document.querySelectorAll(".accordion.is-open").forEach((openAccordion) => {
      openAccordion.classList.remove("is-open");
      openAccordion.querySelector(".accordion-btn");
      openAccordion.querySelector(".accordion-content").style.maxHeight = 0;
    });
  }
});
