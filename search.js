document.addEventListener('keydown', function (event) {
    const searchbox = document.getElementById('searchbox');
    const options = document.querySelectorAll('#fruit-options div');
    let selectedIndex = 0;
    let listVisible = false;

    function changeSelection(event) {
        const selected = document.querySelector('.selected');

        if (!selected) {
            options[0].classList.add('selected');
            return;
        }

        if (!listVisible && (event.key === 'Enter' || event.key === ' ' || (event.altKey && event.key === 'ArrowDown'))) {
            listVisible = true;
            document.getElementById('fruit-options').style.display = 'block';
            searchbox.setAttribute('aria-expanded', 'true');
            return;
        }

        if (listVisible && event.key === 'Escape') {
            listVisible = false;
            document.getElementById('fruit-options').style.display = 'none';
            searchbox.setAttribute('aria-expanded', 'false');
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
            searchbox.setAttribute('aria-activedescendant', options[selectedIndex].id);
            searchbox.value = options[selectedIndex].innerText;
        }

        if (listVisible && event.key === 'Enter') {
            searchbox.value = selected.innerText;
            listVisible = false;
            document.getElementById('fruit-options').style.display = 'none';
            searchbox.setAttribute('aria-expanded', 'false');
            searchbox.focus();
        }
    }

    searchbox.addEventListener('keydown', changeSelection);
    options.forEach(function (option) {
        option.addEventListener('click', function (event) {
            const clickedItem = event.target;
            const selected = document.querySelector('.selected');

            if (selected) {
                selected.classList.remove('selected');
            }

            clickedItem.classList.add('selected');
            searchbox.value = clickedItem.innerText;
            listVisible = false;
            document.getElementById('fruit-options').style.display = 'none';
            searchbox.setAttribute('aria-expanded', 'false');
            searchbox.focus();
        });
    });
});