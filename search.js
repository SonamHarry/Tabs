const inputText = document.getElementById("inputText");
const fruitlist = document.querySelector(".fruitlist");
const options = fruitlist.querySelectorAll('[role="option"]');

inputText.addEventListener("keydown", function (e) {
  if (e.key === "Enter" || e.key === ' ' || (e.altKey && e.key === 'ArrowDown')) {
    fruitlist.style.display = "block";
    fruitlist.focus();
  }
});

fruitlist.addEventListener("keydown", function (e) {
  const currentOption = e.target;
  if (e.key === "ArrowUp") {
    e.preventDefault();
    const previousElement = currentOption.previousElementSibling;
    if (previousElement) {
      previousElement.setAttribute("aria-selected", "true");
      previousElement.setAttribute("tabindex", "0");
      currentOption.setAttribute("aria-selected", "false");
      currentOption.setAttribute("tabindex", "-1");
      previousElement.focus();
    }
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    const nextElement = currentOption.nextElementSibling;
    if (nextElement) {
      nextElement.setAttribute("aria-selected", "true");
      nextElement.setAttribute("tabindex", "0");
      currentOption.setAttribute("aria-selected", "false");
      currentOption.setAttribute("tabindex", "-1");
      nextElement.focus();
    }
  }
});

function activateListItem(listItem) {
  inputText.value = listItem.textContent;
  fruitlist.style.display = "none";
}

function listItemEnter(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    const listItem = e.target;
    activateListItem(listItem);
  }
}

options.forEach(option => {
  option.addEventListener('keydown', listItemEnter);
});
