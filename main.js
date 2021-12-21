document.addEventListener("DOMContentLoaded", () => {


    get(".main-nav").innerHTML = mainNav(
        ["explore", "boards", "people", "agenda", "payments",], "payments");

    get(".inner-content").innerHTML =
        explorePage() +
        peoplePage() +
        paymentsPage(true)
});


listen("bottomNavSelect", (e) => {
    get(`${e.id}`).classList.toggle("hidden")
})

