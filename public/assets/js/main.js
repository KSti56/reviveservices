const mobileNavigation = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("nav > .links");

    const links = document.querySelectorAll("nav > .links > a, nav > .links button");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        links.forEach((link, i) => {
            if (link.style.animation)
                link.style.animation = ''
            else link.style.animation = 'linkFade 3s ease forwards ' + (i / 3) + 's';
        })

        burger.classList.toggle("x-toggled");
    })
}

const app = {
    mobileNavgation: mobileNavigation()
}