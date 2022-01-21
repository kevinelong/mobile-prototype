function showSearchDialog() {
    showDialog("Connections", search(peopleList));
}

function showProfileDialog(target, action, which, index= RUBY) {
    showDialog("Connection Profile",
        contentPanel(
        person(peopleList[index]) +
            actionPanel([
                "block",
                "friend",
                "follow",
            ].map((actionName)=>actionItem(actionName, index, index, actionName,"white",false)).join(""))
        ,"profile")
    );
}

function collapseCard(target, action, which, id){
    target.closest(".card").classList.toggle("collapsed")
    console.log("collapseCard", action, which, id);
}

function openPage(target, action, which, id) {
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
    friend: "Friend Added",
    block: "Blocked",
    heart: "Added to your Favorites",
    share: "Shared to your Connections",
    pin: "Added to Dream Board",
    plan: "Added to Plan",
    accept: "Accepted Invitation",
    decline: "Declined Invitation",
    settle: "Payment Settled",
    zelle: "Payment Settled",
    paypal: "Payment Settled",
    venmo: "Payment Settled",
}
function addItem(target, action, which, id){
    if("person" == which){
        showSearchDialog();
    }

    if("message" == which){
        addMessage();
    }

    console.log("add",...arguments);
}
ACTION_PAGES = {
    back: () => showPage(window.lastPage),
    open: openPage,
    add: addItem,
    new: addItem,
    search: showSearchDialog,
    more: showSearchDialog,
    hide: hideDialog,
    collapse: collapseCard,
    right: hideDialog,
    show: toggleCollapse,
    person: showProfileDialog,
}
function toggleCollapse(target, action, which, id){
    if(!target){
        debugger;
        console.log("toggleCollapse(...)","required target is not defined.")
        return false;
    }
    const card_list = target.closest(".card-list");
    if(!card_list){
        debugger;
        console.log("","No ancestor .card-list");
        return false;
    }
    card_list.classList.toggle("collapse");
}
function route(target, action, which = "", index = "") {
    if (TOAST_MESSAGES.hasOwnProperty(action)) {
        return showToast(TOAST_MESSAGES[action]);
    } else if (ACTION_PAGES.hasOwnProperty(action)) {
        console.log("ACTION: " + action, which, index);
        const f = ACTION_PAGES[action];
        console.log(f);
        return f(target, action, which, index);
    } else {
        console.log("UNKNOWN ACTION:" + action);
    }
}
