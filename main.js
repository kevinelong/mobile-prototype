document.addEventListener("DOMContentLoaded", () => {
    get(".main-nav-outer").innerHTML = mainNav(
        ["explore", "dream", "connect", "plan", "settle",], "connect");
    get(".inner-content").innerHTML =
        explorePage() +
        boardsPage() +
        planPage() +
        peoplePage(true) +
        settleList() +
        settleSplit() +
        settlePage()
});

window.lastPage = "connect";
const search = (items) =>
    label(
        input("search", "text",
            "placeholder=\"Filter Text\""
            // +" onkeypress=\"if (this.value.length > 0){ show('.autocomplete'); }else{ hide('.autocomplete');}\""
        ) +
        div("autocomplete", simpleList(name,
            items
            , "", "right"))
    )

const dialog = (name, content = "") => contentPanel(
    title(name) + content
);
const showDialog = (name, content = "") => {
    get(".dialog").innerHTML = dialog(name, content);
    show(".smoke");
    show(".dialog");
}
const hideDialog = () => {
    hide(".smoke");
    hide(".dialog");
}
const addMessage = () => {
    showDialog("Add Message",
        contentPanel(
            choiceSet("filter", [
                "All People",
                "My Contacts"
            ]) +
            search([
                ["KL", "Kevin", "Long", ""],
                ["NM", "Nina", "Marie", ""],
                ["GB", "Greg", "Bellowe", ""]
            ]) +
            actionPanel(
                actionButton("close")
            )
        )
    );
}
const actionClick = (action) => {
    hideDialog();
    if (action == "back") {
        showPage(window.lastPage);
    } else if (["add", "new"].includes(action)) {
        addMessage();
    } else if (["search", "more"].includes(action)) {
        showDialog("Search", search([
            ["KL", "Kevin", "Long", ""],
            ["NM", "Nina", "Marie", ""],
            ["GB", "Greg", "Bellowe", ""]
        ]));
    } else if (["hide"].includes(action)) {
        hideDialog();
    } else {
        console.log(action);
    }
}

listen("click", e => {
    console.log(e.target);
    if (e.target.classList.contains("smoke")) {
        hide(".smoke");
        hide(".dialog");
    }
}, get(".smoke"));
//
// listen("click",e=>{
//     e.preventDefault();
// }, get(".dialog"));
