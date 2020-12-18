// Variabler
let theFooter;

// Venter på at DOM'en er indlæst
document.addEventListener("DOMContentLoaded", start);

// Kalder getTheFooter, når DOM'en er indlæst
function start() {
    console.log("start");
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
