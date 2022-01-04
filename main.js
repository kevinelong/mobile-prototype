document.addEventListener("DOMContentLoaded", () => {

    const content = c => div("content", c);
    const outerBox = c => div("outer-box", c);
    const innerContent = c => div("inner-content", c);
    const mainNavOuter = c => div("main-nav-outer", c);
    const hiddenSmoke = c => div("hidden smoke", c);
    const hiddenDialog = c => div("hidden dialog", c);
    const hiddenToast = c => div("toast", c);

    document.body.innerHTML = content(
        outerBox(
            innerContent() +
            mainNavOuter() +
            // hiddenToast("") +
            hiddenSmoke(
                hiddenDialog()
            )
        )
    )
    const showToast = () =>{
        const ti = document.createElement("toast-item");
        get(".toast").appendChild(ti);
        setTimeout((e)=>{
            ti.classList.add("hidden");
        },1000);
    }

    // showToast("Toast Message");

    get(".main-nav-outer").innerHTML = mainNav(
        ["explore", "dream", "connect", "plan", "settle",], "connect");
    get(".inner-content").innerHTML =
        explorePage() +
        exploreDetailPage() +
        boardsPage() +
        planPage() +
        connectPage(true) +
        connectChatPage() +
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
const actionClick = (action, which = "", id = "") => {
    hideDialog();
    if (action == "back") {
        showPage(window.lastPage);
    } else if ("open" == action) {
        showPage(which, action, id);
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
