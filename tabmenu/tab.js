document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentActiveButton = document.querySelector(".tab-button.active");
      const currentActivePane = document.querySelector(".tab-pane.active");

      if (currentActiveButton) {
        currentActiveButton.classList.remove("active");
      }
      if (currentActivePane) {
        currentActivePane.classList.remove("active");
      }

      button.classList.add("active");
      const targetTabId = button.dataset.tab;
      const targetTabPane = document.getElementById(targetTabId);

      if (targetTabPane) {
        targetTabPane.classList.add("active");
      }
    });
  });
});
