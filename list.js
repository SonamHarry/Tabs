const fruitlist = document.getElementById("fruitlist");
fruitlist.addEventListener("keydown", function (e) {
  const currentOption = e.target;
  if (e.key === "ArrowUp") {
    e.preventDefault();
    if (currentOption.previousElementSibling) {
      const previousElement = currentOption.previousElementSibling;
      previousElement.setAttribute("aria-selected", "true");
      previousElement.setAttribute("tabindex", "0");
      currentOption.setAttribute("aria-selected", "false");
      currentOption.setAttribute("tabindex", "-1");
      previousElement.focus();
    } else {
      const lastOption = fruitlist.lastElementChild;
      lastOption.focus();
    }
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    if (currentOption.nextElementSibling) {
      const nextElement = currentOption.nextElementSibling;
      nextElement.setAttribute("aria-selected", "true");
      nextElement.setAttribute("tabindex", "0");
      currentOption.setAttribute("aria-selected", "false");
      currentOption.setAttribute("tabindex", "-1");
      nextElement.focus();
    } else {
      const firstOption = fruitlist.firstElementChild;
      firstOption.focus();
    }
  }
});



