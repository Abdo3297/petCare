/* increase counter */
const
    counterDiv = document.querySelector(".fun-fact"),
    countersTag = document.querySelectorAll(".fun-fact h2");
ScrollOut({
    targets: ".fun-fact",
});
window.addEventListener("scroll", function () {
    //Counter
    if (counterDiv.dataset.scroll == "in") {
        countersTag.forEach(el => {
            let time = setInterval(() => {
                if (Number(el.innerText) < el.dataset.counter) {
                    el.innerText = Number(el.innerText) + 1;
                }
                else {
                    clearInterval(time)
                }
            }, 1000)

        })
    }
    else {
        countersTag.forEach(el => {
            el.innerText = 0;
        })
    }
})
/* initial title */
document.title = "Pet Care";
AOS.init();
/* preloader */
window.addEventListener("load", () => {
    document.querySelector(".js-preloader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".js-preloader").style.display = "none";
    }, 3000);
});
/* nav */
const navToggler = document.querySelector(".js-nav-toggler"),
    nav = document.querySelector(".js-nav");
function navToggle() {
    nav.classList.toggle("active");
    navToggler.classList.toggle("active");
}
navToggler.addEventListener("click", navToggle);
/* hide from any place */
document.addEventListener("click", (event) => {
    const isClickInsideNav = nav.contains(event.target),
        isClickInsideNavToggler = navToggler.contains(event.target);
    if (
        !(isClickInsideNav || isClickInsideNavToggler) &&
        nav.classList.contains("active")
    ) {
        navToggle();
    }
});
/* theme dark */
function themeLightDark() {
    const switcherBtn = document.querySelector(".js-switcher-btn");
    const icon = switcherBtn.querySelector("i");
    function changeIcon() {
        if (document.body.classList.contains("dark")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    }
    switcherBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        changeIcon();
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
    /* saved */
    if (localStorage.getItem("theme") !== null) {
        if (localStorage.getItem("theme") === "light") {
            document.body.classList.remove("dark");
        } else {
            document.body.classList.add("dark");
        }
    }
    changeIcon();
}
themeLightDark();
/*scroll to top*/
let span = document.querySelector(".up");
window.onscroll = function () {
    this.scrollY >= 550 ? span.classList.add("show") : span.classList.remove("show");
};
span.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
};
