// set initial value to 0
let count = 0;

// select value and buttons
// querySelector and querySelectorAll methods are helpful web API's that allow you to access elements in the DOM. You can use these methods to select elements by type, class, id, attribute, pseudo-class, and pseudo-element selectors

// instead of selecting each button class use querySelectorAll to select generic class="btn" to select all buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// console.log(btns);

// forEach - loop - transform into array
// pass in the callback function 

// access each and every item using parameter - console.log and shows each button *note (item) can be called anything and functions remains the same - rename to (btn)

// btns.forEach(function (item) {
//     console.log(item);
// });

// event object to check which button is clicked on 
// btns.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//     console.log(e.currentTarget);
// });
// });

// specific class list 
// btns.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//     console.log(e.currentTarget.classList);
// });
// });

// assign to a variable
// so each and every time a button is clicked it'll save in variable
// now set up an if statement - if styles (variable) contains specific class (decrease) - would want to decrease count
// variable that holds the value (span) change the text content and set it to equal to the count
// .addEventListener (event listener) (e)- event object
// btns.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//     const styles=(e.currentTarget.classList);
//     if(styles.contains("decrease")) {
//         count--;
//     }
//     value.textContent = count;
// });
// });

// // count-- (decrements by 1), count++ (increments by 1), 
// reset button explanation - can use if then style.contains - instead since if not decreasing or increasing already know that - then it's resetting value
// count = 0;
// btns.forEach(function(btn) {
//     btn.addEventListener("click", function (e) {
//         const styles = e.currentTarget.classList;
//         if (styles.contains("decrease")) {
//             count--;
//         } else if (styles.contains("increase")) {
//             count++;
//         } else { (styles.contains("reset"))
//             count = 0;
//         }
//         value.textContent = count;
//     });
// });

// ************************ working code ****************************************
// change colors if the value (count) is bigger than 0
// if(count > 0;)  then change color (span) value.style.color =  "green"
// change colors if the value (count) is smaller than 0
// if(count < 0;)  then change color (span) value.style.color =  "red"
// change colors if the value (count) is === 0 (strict equality)
// if(count === 0;)  then change color (span) value.style.color =  "black"


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


