
document.addEventListener("DOMContentLoaded", () => {
    get(".main-nav").innerHTML = 
        mainNavTab("EXPLORE") +
        mainNavTab("BOARDS", false, "boards") +
        mainNavTab("PEOPLE", true, "people") +
        mainNavTab("AGENDA", false, "planner") +
        mainNavTab("PAYMENTS", false, "payments");

    get(".inner-content").innerHTML =
        title(
            icon("menu") +
            div("title-middle",
                div("title-text", "People") +
                circle(
                    icon("search")
                )
            ) +
            icon("account-circle")
        ) +
        choiceSet(
            choice("ALL NETWORK (23)", true) +
            choice("PLANNERS (5)") +
            choice("FRIENDS (5)") +
            choice("CONFIRMATIONS (1)") +
            choice("NEW PEOPLE (1)") +
            choice("MATCHES (1)") +
            choice("DEALS (1)")
        ) +
        cardList(
            card("[Kind] Subject<br>&nbsp;<br>Body of the text message.") +
            card("[Kind] Subject<br>&nbsp;<br>Body of the text message.")
        )
});
