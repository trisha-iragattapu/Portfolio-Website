/* SCROLL REVEAL */
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
});

/* ACTIVE NAV LINK */
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    document.querySelectorAll("section").forEach(sec => {
        const top = sec.offsetTop - 100;
        if (scrollY >= top) {
            current = sec.getAttribute("id");
        }
    });

    links.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
            a.classList.add("active");
        }
    });
});
