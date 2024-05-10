let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");


// decrease by 5 increase by 5 
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = (e.currentTarget.classList);
        if (styles.contains("decrease")) {
            count -= 5;
        } else if (styles.contains("increase")) {
            count += 5;
        } else {
            count = 0;
        }

        if (count > 0) {
            value.style.backgroundColor = "green";
            value.style.color = "white";
            value.style.borderRadius = "50px";
            value.style.padding = "20px";
        }
        if (count < 0) {
            value.style.backgroundColor = "red";
            value.style.color = "white";
            value.style.borderRadius = "50px";
            value.style.padding = "20px";
        }
        if (count === 0) {
            value.style.backgroundColor = "";
            value.style.color = "black";
            value.style.fontSize="";
            
        }
        value.textContent = count;
        
    });
});