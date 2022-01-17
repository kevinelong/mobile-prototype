function showSearch() {
    showDialog("Search", search([
        ["Ruby Red", "Ruby", "Red", ""],
        ["Betty Ford", "Betty", "Ford", ""],
        ["Joe Schmoe", "Joe", "Schmoe", ""],
    ]));
}
function collapseCard(action, which, id){
    console.log(action, which, id);
}
function openPage(action, which, id) {
    if ("open" === action && which.toLowerCase().startsWith("http")) {
        window.open(which, "_self");
    } else if ("open" === action) {
        showPage(which, action, id);
    } else if ("person" === action) {
        showPage("connect_person", "open", id);
    } else if ("board" === action) {
        showPage("dream", "dream", id);
    }
}

TOAST_MESSAGES = {
    favorite: "Added to favorites!",
    follow: "Followed!",
    heart: "Added to your Favorites",
    share: "Shared to your Connections",
    pin: "Added to Dream Board",
    plan: "Added to Plan",
    accept: "Invitation Accepted and Added to Plan",
    decline: "Invitation Declined and Not Added to Plan",
    settle: "Payment Settled",
    zelle: "Payment Settled",
    paypal: "Payment Settled",
    venmo: "Payment Settled",
}

ACTION_PAGES = {
    back: () => showPage(window.lastPage),
    open: openPage,
    add: addMessage,
    new: addMessage,
    search: showSearch,
    more: showSearch,
    hide: hideDialog,
    collapse: collapseCard
}

function route(action, which = "", id = "") {
    if (TOAST_MESSAGES.hasOwnProperty(action)) {
        return showToast(TOAST_MESSAGES[action]);
    } else if (ACTION_PAGES.hasOwnProperty(action)) {
        console.log("ACTION: " + action, which, id);
        const f = ACTION_PAGES[action];
        console.log(f);
        return f(action, which, id);
    } else {
        console.log("UNKNOWN ACTION:" + action);
    }
}
