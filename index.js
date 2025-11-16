const header = document.querySelector("header");
const spacer = document.createElement('div');

spacer.id = 'spacer';
spacer.style.height = `${header.offsetHeight}px`;
spacer.style.display = 'none';
header.before(spacer);

// Example: when scrolling past 100px
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.classList.add("fixed");
        spacer.style.display = "block";
    } else {
        header.classList.remove("fixed");
        spacer.style.display = "none";
    }
});

