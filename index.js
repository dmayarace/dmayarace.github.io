function myFunction() {
    let mobNavLinks = document.getElementById("mobileNavLinks");
    if (mobNavLinks.style.display === "block") {
        mobNavLinks.style.display = "none";
    } else {
        mobNavLinks.style.display = "block";
    }
}

const card = document.querySelector(".imageInner");

card.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
});
