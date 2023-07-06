document.addEventListener('keydown', function () {
  const searchbox = document.getElementById('searchbox');
  const options = document.querySelectorAll('#fruit-options div[role="option"]');
  let selectedIndex = 0;
  let listVisible = false;
  function changeSelection(event) {
      const selected = document.querySelector('.selected');
      if (!selected) {
          options[0].classList.add('selected');
          return;
      }
      if (!listVisible && (event.key ==='Enter' || event.key === ' ')) {
          listVisible = true;
          document.getElementById('fruit-options').style.display = 'block';
          return;
      }
      if (listVisible && event.key === 'Escape') {
          listVisible = false;
          document.getElementById('fruit-options').style.display = 'none';
          return;
      }
      if (listVisible) {
          if (event.key === 'ArrowDown' && selectedIndex < options.length - 1) {
              selectedIndex++;
          } else if (event.key === 'ArrowUp' && selectedIndex > 0) {
              selectedIndex--;
          }
          selected.classList.remove('selected');
          options[selectedIndex].classList.add('selected');
          document.getElementById('fruit-options').setAttribute('aria-activedescendant', options[selectedIndex].id);
      }
  }
  searchbox.addEventListener('keydown', changeSelection);
});