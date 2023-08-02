/*======= Style Switcher ======= */

let styleSwitcherToggle = document.querySelector("style-switcher-toggler");
if (styleSwitcherToggle) {
    styleSwitcherToggle.addEventListener("click", () => {
        document.querySelector(".style-switcher").classList.toggle("open");
    })
}

/*======= Style Switcher Hide on scroll ======= */

window.addEventListener("scroll" , () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/*======= Theme Colors ======= */

const alternateStyles = document.querySelectorAll('.alternate-style')

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}

/*======= Theme Light and dark mode ======= */

const dayNight = document.querySelector('.day-night');
dayNight.addEventListener("click" , () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")
})

window.addEventListener("load" , () => {
    if(document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})

window.addEventListener("click" , () => {
    if(document.body.classList.contains("dark")){
        const alternateStyles = document.querySelectorAll('.alternate-style')

    function setActiveStyle(color) {
        alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}
    }
})
