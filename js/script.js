//Navigation Menu

const closeButton = document.querySelector(".close-nav");
const openButton = document.querySelector(".open-nav");
const nav = document.querySelector(".nav");

closeButton.addEventListener("click", () => {
  nav.classList.remove("navigation-open");
});

openButton.addEventListener("click", () => {
  nav.classList.add("navigation-open");
});

//Tabs

const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });
  tabButtons.forEach(tab => {
    tab.setAttribute("aria-selected", false);
  });
  event.currentTarget.setAttribute("aria-selected", true);
  const { id } = event.currentTarget;
  const tabPanel = tabPanels.find(
    panel => panel.getAttribute("aria-labelledby") === id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener("click", handleTabClick));
