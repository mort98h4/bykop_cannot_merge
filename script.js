// Variabler
let theFooter;

// Lytter efter scroll på hjemmesiden, og ændrer baggrundsfarven på headeren
//window.addEventListener("scroll", function () {
//    let header = document.querySelector("header");
//    let windowPosition = window.scrollY > 0;
//
//    header.classList.toggle("scrolling_active"), windowPosition;
//});

// Venter på at DOM'en er indlæst
document.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("start");

    // JavaScript der styrer burgermenu
    let burger = document.querySelector(".burger");
    let nav = document.querySelector(".nav_links");

    // Lytter efter click på burgermenu
    burger.addEventListener("click", () => {
        // Viser/skjuler menuen
        nav.classList.toggle("nav_active");
        // Tilføjer/fjerner animation på burgermenu
        burger.classList.toggle("toggle");
    });
    // Lytter efter klik på logo, og går til forsiden
    document.querySelector("#logo").addEventListener("click", () => {
        location.href = "index.html";
    });

    // Kalder getTheFooter, når DOM'en er indlæst
    getTheFooter();

}

// Henter footeren fra WP, og indsætter indholdet i DOM'en
async function getTheFooter() {
    console.log("getTheFooter");
    let url = "http://mortengross.dk/kea/10_eksamen_2_sem/bykop/wordpress/wp-json/wp/v2/pages/104";
    let jsonData = await fetch(url);
    theFooter = await jsonData.json();
    console.log(theFooter);
    document.querySelector("footer").innerHTML = theFooter.content.rendered;

    // Gør elementer i footeren klikbar og ændrer cursoren
    document.querySelector(".footer_about").style.cursor = "pointer";
    document.querySelector(".footer_faq").style.cursor = "pointer";
    document.querySelector(".footer_find").style.cursor = "pointer";
    document.querySelector(".footer_about").addEventListener("click", function () {
        location.href = "om_bykop.html";
    });
    document.querySelector(".footer_faq").addEventListener("click", function () {
        location.href = "kontakt.html#faq";
    });

    document.querySelector(".footer_find").addEventListener("click", function () {
        location.href = "find_bykop.html";
    });
}
