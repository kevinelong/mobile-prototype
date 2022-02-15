function sendInvite() {
    showSearch("Send Invitation");
}

function addContact() {

    showDialog(
        "Add New Contact", [
            label("first", input("first", "text", `placeholder="First Name"`)),
            label("last", input("last", "text", `placeholder="Last Name"`)),
        ].join("") +
        actionPanel(
            actionItem("cancel", "contact", -1, "Cancel", "black") +
            actionItem("save", "contact", -1, "Save", "black")
        )
    )
}

function createGroup() {
    showDialog(
        "Create Group",
        label("name", input("name", "text", `placeholder="Name"`)) +
        actionPanel(
            actionItem("cancel", "contact", -1, "Cancel", "black") +
            actionItem("save", "contact", -1, "Save", "black")
        )
    )
}

function addParticipant() {
    showSearch("Add Participant");
}

function addPerson() {
    showSearch("Add Person");
}

function showSearch(title, index = -1) {
    showDialog(title,
        contentPanel(
            choiceSet("search-filter", ["All", "Connections", "Groups", "Contacts"]) +
            search(peopleList, index) +
            actionList("filter", ["Create New Group", "Add New Contact"], false, 0, "black")
        )
    );
}

const THINGS_TO_DO = [{
        name: "Thing 1"
    },
    {
        name: "Thing 2"
    }
];
const THINGS_TO_DO_FILTERS = [
    "All",
    "Indoor",
    "Outdoor",
    "Group"
];

const MOODS = [
    {name:"Romantic"},
    {name:"Active"},
    {name:"Relaxed"},
    {name:"Thirsty"},
    {name:"Hungry"},
    {name:"Bored"},
];

const DESTINATIONS = [{
        name: "Santa Barabara, California USA"
    },
    {
        name: "Las Vagas, Nevada USA"
    }
]
const RESTAURANTS = [{
        name: "1"
    },
    {
        name: "2"
    }
];
const RESTAURANT_FILTERS = [
    "All",
    "F1",
    "F2",
    "F3"
];
const LODGING = [{
        name: "1"
    },
    {
        name: "2"
    }
];
const LODGING_FILTERS = [
    "All",
    "F1",
    "F2",
    "F3"
];

function selectDate(name) {
    return label(
        cleanName(name),
        text(name) +
        input(name, "date")
    );
}

function selectDateRange(name) {
    return label(cleanName(name),
        text(name) +
        row(selectDate("From") + " - " + selectDate("To"))
    );
}

function onClickTabItem(e, name, index) {
    const top = e.closest(".tab-set");
    const items = top.querySelectorAll(".tab-item");
    const contents = top.querySelectorAll(".tab-content");
    items.forEach(item => item.classList.remove('selected'));
    e.classList.add('selected');
    top.children[index].classList.add("selected")
    top.children[index].classList.remove("hidden")
}

function tabItem(name, index, isSelected = false) {
    const selected = isSelected ? "selected" : "";
    return div(
        `tab-item ${selected} ${cleanName(name)}`,
        name,
        ` onclick="onClickTabItem(this,'${cleanName(name)}','${index}')" `);
}
//
// function tabContent(name, index= 0, content, isHidden=true) {
//     const hidden = isHidden ? "hidden" : "";
//     return div(`tab-content ${hidden} ${cleanName(name)}`, content);
// }
//
// function tabSet(name, list) {
//     return div(
//         `tab-set ${cleanName(name)}`,
//         col(
//             row(list.map(tabItem).join("")) +
//             row(list.map(tabContent).join(""))
//         )
//     );
// }

function showThingsToDo(title = "Filter - Things To Do", index = -1) {
    showDialog(title,
        contentPanel([
            label("refine-filter",
                text("Refine Filter:") +
                choiceSet("to-do-subcategory-choices", [
                    "Discover",
                    "Broadcast",
                    "Instant Book"
                ], "Instant Book")
            ),
            //
            // tabSet("explore-filter-tabs", [
            //     tabItem("A", "AAA"),
            //     tabItem("B", "BBB"),
            //     tabItem("C", "CCC"),
            // ]) +

            selectDateRange("Date Range:"),

            selectOptionsComponent("# Adults", [{
                name: "Any Number",
                value: 0
            }]),

            selectOptionsComponent("# Kids", [{
                name: "Any Number",
                value: 0
            }]),

            selectOptionsComponent("Time", [{ name: "Any Time", value: 0 }]),

            selectOptionsComponent("Duration", [{
                name: "Any Duration",
                value: 0
            }]),

            selectOptionsComponent("Budget", [{
                name: "Any Budget",
                value: 0
            }]),

            label("keywords",
                text("Keywords:") +
                choiceSet("keywords", ["KW1", "KW2", "KW3"])
            ),

            label("personal-keywords",
                text("Personal Keywords:") +
                choiceSet("keywords", ["PKW1", "PKW2", "PKW3"])
            ),

            actionList("filter-actions", ["apply"], false, 0, "black"),
        ].join(""))
    );
}

function showRestaurants(title = "Filter - Restaurants", index = -1) {
    showDialog(title,
        contentPanel(
            choiceSet("search-filter", RESTAURANT_FILTERS) +
            search(RESTAURANTS, index) +
            actionList("filter-actions", ["apply"], false, 0, "black")
        )
    );
}

function showLodging(title = "Filter - Lodging", index = -1) {
    showDialog(title,
        contentPanel(
            choiceSet("search-filter", LODGING_FILTERS) +
            search(LODGING, index) +
            actionList("filter-actions", ["apply"], false, 0, "black")
        )
    );
}

function showDestinations(title = "Destination", index = -1) {
    showDialog(title,
        contentPanel(
            search(DESTINATIONS, index) +
            actionList("filter-actions", ["apply"], false, 0, "black")
        )
    );
}
function showLocations(title = "Current Location", index = -1) {
    showDialog(title,
        contentPanel(
            search(DESTINATIONS, index) +
            actionList("filter-actions", ["apply"], false, 0, "black")
        )
    );
}
function showMoodDialog(title = "Mood", index = -1) {
    showDialog(title,
        contentPanel(
            search(MOODS, index)
            // actionList("filter-actions", ["apply"], false, 0, "black")
        )
    );
}

function showReviewDialog() {
    showDialog(
        "Write Review",
        contentPanel(
            label(
                "review",
                text("Review") + textarea("review")
            ) +
            actionList("", ["cancel", "save"], false, 0, "black")
        )
    )
}
/***
 * a) Destination box and 
 * b) Date range Calendar 
 * c) Note for future functionality: 
 * if a date range of more a single day app asks,
 *  if user wants to create a Plan?
 * (so 1 night triggers it)
 * 
 */

function showSmartIdeasDialog() {
    showDialog(
        "Smart Ideas",
        contentPanel([
            label(
                "Destination", row(
                    // text("Destination") + 
                    input("destination", "text", `placeholder="Destination"`) +
                    actionButton("...", "search-destination"))
            ),
            selectDateRange("Date Range:"),
            checkBox("Add to Plan", "add-to-plan"),
            actionList("", ["cancel", "apply"], false, 0, "black")
        ].join(""))
    )
}

function showUploadDialog() {
    showDialog("Upload", input("file", "file", "") + actionButton("upload"))
}

function showAddPlaceDialog(a,b,c,d) {
    showDialog("Add Event on " + d, 
    label("place", "Where" + input("place","text","placeholder=\"Where?\"") ) +
    label("place", "When" + input("time", "time") ) + 
    actionButton("add"))
}

function showMatchDialog() {
    showDialog("Taste Match",
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
                    <b>Santa Barbara</b> Collections
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
    const other = label("", "Relationship" +
            input("relationship", "text", `placeholder="e.g. Acquaintance, Friend, BFF"`)
        ) +
        label("",
            "Shared Plans" +
            div("card-tags", [...[
                "Brunch - Sunday March 3rd 2022"
            ]].map(hashTag).join(""))
        ) +
        label("",
            "Interests" +
            div("card-tags", [...[
                "Skiing", "Fine Dining - Shared", "Wine Tasting - Shared"
            ]].map(hashTag).join(""))) +
        label("",
            "Boards" +
            div("card-tags", [...[
                "Santa Barbara - Linked", "Paris - Shared. Link?", "Seattle"
            ]].map(hashTag).join(""))) +
        cardGroups(who.groups) +
        ((index === 0) ? "" : actions);

    const content = contentPanel(
        person(who) +
        (index === 0 ? "" : other),
        "profile"
    );
    showDialog(index === 0 ? "Your Profile" : "Connection Profile", content);
}

function collapseCard(target) {
    target.closest(".card").classList.toggle("collapsed");
}

function edit(target, action, which, id){
    console.log("edit()", target, action, which, id);
    if(which === "mood"){
        showMoodDialog();
    }
    else if(which === "location"){
        showLocations();
    }
}

function openPage(target, action, which, id) {
    console.log("openPage", target, action, which, id);
    if ("open" === action && which.toLowerCase().startsWith("http")) {
        window.open(which, "_self");
    } else if ("open" === action || "explore" === action) {
        showPage(which, action, id);
    } else if ("person" === action) {
        showPage("connect_person", "open", id);
    } else if ("split" === action) {
        showPage("settle_split", "open", id);
    } else if ("board" === action) {
        showPage("collect", "collect", id);
    }
}

TOAST_MESSAGES = {
    acknowledge: "Acknowledged!",
    favorite: "Added to favorites!",
    follow: "Followed!",
    friend: "Friend Added",
    block: "Blocked",
    book: "Finding the best rate...",
    heart: "Added to your Favorites",
    share: "Shared to your Connections",
    collect: "Added to your Collection",
    plan: "Added to your Plan",
    accept: "Accepted Invitation",
    schedule: "Added to your Plan",
    decline: "Declined Invitation",
    settle: "Payment Settled",
    "remind-all": "Reminders Sent",
    "settle-all": "Payments Sent",
    zelle: "Payment Settled",
    paypal: "Payment Settled",
    venmo: "Payment Settled",
    verify: "Verified",
    notify: "Notification Sent",
    "check-in": "Checked In",
};

function addItem(target, action, which, id) {
    if ("person" === which) {
        showSearch(`${action} ${which}`, id);
    }

    if ("message" === which) {
        addMessage();
    }

    //   console.log("add", ...arguments);
}

ACTION_PAGES = {
    back: () => showPage(window.lastPage),
    explore: openPage,
    open: openPage,
    settle_split: openPage,
    split: openPage,
    "create-new-group": createGroup,
    "add-participant": addParticipant,
    add: addItem,
    contact: addContact,
    new: addItem,
    search: addPerson,
    'search-destination': showDestinations,
    invite: sendInvite,
    more: addPerson,
    hide: hideDialog,
    collapse: collapseCard,
    right: hideDialog,
    show: toggleCollapse,
    'map-on': toggleMap,
    'map-off': toggleMap,
    person: showProfileDialog,
    match: showMatchDialog,
    upload: showUploadDialog,
    'smart-ideas': showSmartIdeasDialog,
    'add-place': showAddPlaceDialog,
    'edit': edit,
    review: showReviewDialog
};

function toggleCollapse(target) {
    if (!target) {
        return false;
    }
    const row = target.closest(".row");
    if (!row) {
        return false;
    }
    row.classList.toggle("collapse");

    const card_list = row.nextElementSibling;
    if (!card_list) {
        return false;
    }
    card_list.classList.toggle("collapse");
}
function toggleMap(target) {
    console.log(target);
    let img = target.querySelectorAll("img")[0];
    const src = img.getAttribute("src");

    if (src == "images/icons/icon-map-on.svg" ){
        img.setAttribute("src", "images/icons/icon-map-off.svg" );
    }else{
        img.setAttribute("src", "images/icons/icon-map-on.svg");
    }

    get('.map').classList.toggle("hidden");
}

function route(target, action, which = "", index = "") {
    console.log("ROUTE", target, action, which, index)
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