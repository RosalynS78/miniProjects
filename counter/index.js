// set initial value to 0
let count = 0;

// select value and buttons
// querySelector and querySelectorAll methods are helpful web API's that allow you to access elements in the DOM. You can use these methods to select elements by type, class, id, attribute, pseudo-class, and pseudo-element selectors
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "#222";
        }
        value.textContent = count;
    });
});
