function showSearchDialog(id) {
    showDialog("Add Person", search(peopleList, id));
}

function showMatchDialog() {
    showDialog(
        "Taste Match",
        `
        <div class="dialog-content">
            <header>

            </header>
            <main>
                <div>
                    <h2>You and Joe Schmoe Matched!</h2>
                </div>
                <div class="images">

                    <img src="images/faces/face1.png" alt="">

                    <img src="images/faces/face2.png" alt="">

                </div>

                <div>
                    <!-- <b>Richard's home - Best Wine tasting in Napa</b> has been booked by Joe Shmoe for
                    all co-planners. -->
                    <b>You and Joe Schmoe</b> both classified <b>Yoichi’s</b> as an Idea in your
                    <b>Santa Barbara</b> DreamBoards
                </div>
                <div>
                    You can pay back now or settle at the end of the day.
                </div>
            </main>
            <footer>
                <button class="link" onclick="actionClick(this, 'close','',-1)">
                    Don't Show Again
                </button>
                <div>
                    <button onclick="actionClick(this, 'close','',-1)">
                        Dismiss
                    </button>
                    <button onclick="actionClick(this, 'close','',-1)">
                        Open Board
                    </button>
                </div>
            </footer>     
        </div>    
         `
    );
}

function showProfileDialog(target, action, which, index = RUBY) {
    const who = peopleList[index];
    const actions = actionPanel(
        ["block", "friend", "follow"]
            .map((actionName) =>
                actionItem(
                    actionName,
                    index,
                    index,
                    actionName,
                    "black",
                    false
                )
            )
            .join("")
    );
    const other = text(
            "Relationship" +
            input("relationship", "text", `placeholder="e.g. Acquaintance, Friend, BFF"`)
        ) +
        text(
            "Shared Plans" +
            div("card-tags", [...[
                "Brunch - Sunday March 3rd 2022"
            ]].map(hashTag).join(""))
        ) +
        text(
            "Interests" +
            div("card-tags", [...[
                "Skiing", "Fine Dining - Shared", "Wine Tasting - Shared"
            ]].map(hashTag).join(""))
        ) +
        text(
            "Boards" +
            div("card-tags", [...[
                "Santa Barbara - Linked", "Paris - Shared. Link?", "Seattle"
            ]].map(hashTag).join(""))
        ) +
        cardGroups(who.groups) +
        ((index === 0) ? "" : actions);

    const content = contentPanel(
        person(who) +
        (index===0 ? "" : other)
        ,
        "profile"
    );
    showDialog(index === 0 ? "Your Profile" : "Connection Profile", content);
}

function collapseCard(target) {
    target.closest(".card").classList.toggle("collapsed");
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
};

function addItem(target, action, which, id) {
    if ("person" === which) {
        showSearchDialog(id);
    }

    if ("message" === which) {
        addMessage();
    }

    //   console.log("add", ...arguments);
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
    match: showMatchDialog,
};

function toggleCollapse(target) {
    if (!target) {
        //   console.log("toggleCollapse(...)", "required target is not defined.");
        return false;
    }
    const card_list = target.closest(".card-list");
    if (!card_list) {
        //   console.log("", "No ancestor .card-list");
        return false;
    }
    card_list.classList.toggle("collapse");
}

function route(target, action, which = "", index = "") {
    if (TOAST_MESSAGES.hasOwnProperty(action)) {
        return showToast(TOAST_MESSAGES[action]);
    } else if (ACTION_PAGES.hasOwnProperty(action)) {
        //   console.log("ACTION: " + action, which, index);
        const f = ACTION_PAGES[action];
        //   console.log(f);
        return f(target, action, which, index);
    } else {
        //   console.log("UNKNOWN ACTION:" + action);
    }
}
