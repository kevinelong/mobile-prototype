document.addEventListener("DOMContentLoaded", () => {


    get(".main-nav").innerHTML = mainNav(
        ["explore", "boards", "people", "agenda", "payments",], "people");

    get(".inner-content").innerHTML =
        explorePage() +
        peoplePage()
});


listen("bottomNavSelect", (e) => {
    get(`${e.id}`).classList.toggle("hidden")
})

