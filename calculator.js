let inputbox = document.getElementById('result');
let button = document.querySelectorAll('button');
let equal = document.getElementById('equal');
let clear = document.getElementById('clear');
let deletebtn = document.getElementById('delete');


button.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;

        if (buttonText === "=") {
            calculateResult();
        } else if (buttonText === "Clear") {
            clearResult();
        } else if (buttonText === "Delete") {
            deleteLastCharacter();
        } else {
            updateResult(buttonText);
        }
    });
});

function updateResult(value) {
    inputbox.value += value;
}

function clearResult() {
    inputbox.value = "";
}

function deleteLastCharacter() {
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    try {
        const numbers = inputbox.value;
        const resultValue = eval(numbers);
        inputbox.value = resultValue;
    } catch (error) {
        inputbox.value = "Error";
    }
}