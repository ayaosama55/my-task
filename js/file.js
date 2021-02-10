/* our nav bar icon */
let ourIcon = document.querySelector(".icon-bar .icon");
let ourIconDiv = document.querySelector(".icon-bar");
let ourNav = document.querySelector(".nav-bar");
ourIconDiv.addEventListener("click", function () {
    "use strict";
    if (ourIcon.dataset.open === "false") {
        ourNav.style.transform = "translateX(0)";
        this.style.right = "10px";
        ourIcon.classList.remove("fa-bars");
        ourIcon.classList.add("fa-times");
        ourIcon.dataset.open = "true";
    } else if (ourIcon.dataset.open === "true") {
        ourNav.style.transform = "translateX(-272px)";
        this.style.right = "-40px";
        ourIcon.classList.remove("fa-times");
        ourIcon.classList.add("fa-bars");
        ourIcon.dataset.open = "false";
    }
});
/******************************************************* */