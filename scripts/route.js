const applyOrCancel = ["Apply", "Cancel"];

function sendInvite() {
    showSearch("Send Invitation");
}

function addContact() {
    showDialog(
        "Add New Contact",
        [
            label("first", input("first", "text", `placeholder="First Name"`)),
            label("last", input("last", "text", `placeholder="Last Name"`)),
        ].join("") +
        actionPanel(
            actionItem("cancel", "contact", -1, "Cancel", "black") +
            actionItem("save", "contact", -1, "Save", "black")
        )
    );
}

function createGroup() {
    showDialog(
        "Create Group",
        label("name", input("name", "text", `placeholder="Name"`)) +
        actionPanel(
            actionItem("cancel", "contact", -1, "Cancel", "black") +
            actionItem("save", "contact", -1, "Save", "black")
        )
    );
}

function addParticipant() {
    showSearch("Add Participant");
}

function addPerson() {
    showSearch("Add Person");
}

function showSearch(title, index = -1) {
    showDialog(
        title,
        contentPanel(
            choiceSet("search-filter", [
                "All",
                "Connections",
                "Groups",
                "Contacts",
            ], "All") +
            search(peopleList, index) +
            actionList(
                "filter",
                ["Create New Group", "Add New Contact"],
                false,
                0,
                "black"
            )
        )
    );
}

function labeledInput(name = "", inputType = "text") {
    return label(
        cleanName(name),
        (name ? text(name) : "") + input(name, inputType)
    );
}

function selectDate(name = "") {
    return labeledInput(name, "date");
}

function selectTime(name = "") {
    return labeledInput(name, "time");
}

function labeledRange(
    name = "",
    inputType = "date",
    fromText = "From",
    toText = "To"
) {
    return label(
        cleanName(name),
        (name ? text(name) : "") +
        rangeRow(
            labeledInput(fromText, inputType) +
            " - " +
            labeledInput(toText, inputType)
        )
    );
}

function selectDateRange(name = "") {
    return labeledRange(name, "date");
}

function selectTimeRange(name = "") {
    return labeledRange(name, "time");
}

function onClickTabItem(e, name, index) {
    const top = e.closest(".tab-set");
    const items = top.querySelectorAll(".tab-item");
    const contents = top.querySelectorAll(".tab-content");
    items.forEach((item) => item.classList.remove("selected"));
    e.classList.add("selected");
    top.children[index].classList.add("selected");
    top.children[index].classList.remove("hidden");
}

function tabItem(name, index, isSelected = false) {
    const selected = isSelected ? "selected" : "";
    return div(
        `tab-item ${selected} ${cleanName(name)}`,
        name,
        ` onclick="onClickTabItem(this,'${cleanName(name)}','${index}')" `
    );
}

function subcategoryChoices() {
    return label(
        "refine-filter",
        text("Refine Filter:") +
        choiceSet(
            "subcategory-choices",
            [
                icon("activity") + "Instant Book",
                icon("collect") + "Personal Feed",
                icon("connect") + "Broadcast",
            ],
            icon("activity") + "Instant Book"
        )
    );
}

function showThingsToDo(title = "Filter - Things To Do", index = -1) {
    showDialog(
        title,
        contentPanel(
            [
                subcategoryChoices(),
                //
                // tabSet("explore-filter-tabs", [
                //     tabItem("A", "AAA"),
                //     tabItem("B", "BBB"),
                //     tabItem("C", "CCC"),
                // ]) +

                selectDateRange("Date Range:"),

                selectOptionsComponent("# Adults", [
                    {
                        name: "Any Number",
                        value: 0,
                    },
                ]),

                selectOptionsComponent("# Kids", [
                    {
                        name: "Any Number",
                        value: 0,
                    },
                ]),

                selectOptionsComponent("Time", [
                    {name: "Any Time", value: 0},
                ]),

                selectOptionsComponent("Duration", [
                    {
                        name: "Any Duration",
                        value: 0,
                    },
                ]),

                selectOptionsComponent("Budget", [
                    {
                        name: "Any Budget",
                        value: 0,
                    },
                ]),

                label(
                    "keywords",
                    text("Keywords:") +
                    choiceSet("keywords", ["KW1", "KW2", "KW3"])
                ),

                label(
                    "personal-keywords",
                    text("Personal Keywords:") +
                    choiceSet("keywords", ["PKW1", "PKW2", "PKW3"])
                ),

                actionList(
                    "filter-things-to-do",
                    applyOrCancel,
                    false,
                    0,
                    "black"
                ),
            ].join("")
        )
    );
}

function showPeople(title = "Filter - People", index = -1) {
    showDialog(
        title,
        contentPanel(
            [
                subcategoryChoices(),
                label(
                    "categories",
                    text("Categories:") +
                    choiceSet(
                        "categories",
                        [
                            "All",
                            "Friends",
                            "TasteMatch",
                            "Experts",
                            "Guides",
                            "Travel Agents",
                        ],
                        "All"
                    )
                ),
                label(
                    "genders",
                    text("Genders:") +
                    choiceSet("genders", ["Both", "Male", "Female"], "Both")
                ),
                label(
                    "tags",
                    text("Tags:") +
                    input(
                        "tag-input",
                        "text",
                        `placeholder="Add tag name..."`
                    ) +
                    hashTags(["TasteMatch", "Foodie"])
                ),
                label(
                    "keywords",
                    text("Keywords:") +
                    input(
                        "keyword-input",
                        "text",
                        `placeholder="Add keyword..."`
                    )
                ),
                div(
                    "boolean-choices",
                    text("Attributes:") +
                    toggleSet([
                        "Must Have Collections",
                        "Offers Tours",
                        "Nearby",
                    ])
                ),
                actionList("filter-people", applyOrCancel, false, 0, "black"),
            ].join("")
        )
    );
}

function showRestaurants(title = "Filter - Restaurants", index = -1) {
    showDialog(
        title,
        contentPanel(
            subcategoryChoices() +
            // choiceSet("search-filter", RESTAURANT_FILTERS) +
            // search([], index) +
            search(RESTAURANTS, index) +
            actionList(
                "filter-actions-restaurants",
                applyOrCancel,
                false,
                0,
                "black"
            )
        )
    );
}

function showLodging(title = "Filter - Lodging", index = -1) {
    showDialog(
        title,
        contentPanel(
            subcategoryChoices() +
            choiceSet("search-filter", LODGING_FILTERS) +
            search([], index) +
            // search(LODGING, index) +
            actionList(
                "filter-actions-lodging",
                applyOrCancel,
                false,
                0,
                "black"
            )
        )
    );
}

function showDestinations(title = "Destination", index = -1) {
    showDialog(
        title,
        contentPanel(
            search(DESTINATIONS, index) +
            actionList(
                "filter-actions-select-destination",
                applyOrCancel,
                false,
                0,
                "black"
            )
        )
    );
}

function showAddCollection() {
    showDialog(
        "Create a Collection",
        choiceSet("dp", ["Destination", "Pursuit"], "") +
        contentPanel(
            search([], -1, "Type a Destination or a Pursuit") +
            actionList(
                "filter-actions-select-destination",
                applyOrCancel,
                false,
                0,
                "black"
            )
        )
    );
}

function showAddCard(titleText = "Add Something to Board") {
    showDialog(
        titleText,
        selectOptionsComponent("Category", activityData) +
        radioComponent("Card Type", [
            {
                name: "Favorite",
                value: "Favorite",
            },
            {
                name: "Going",
                value: "Going",
            },
        ]) +
        contentPanel(
            label(
                `name`,
                input(
                    "name",
                    "text",
                    `placeholder="Add Card Name, Address, or Coordinates."`
                )
            ) +
            actionList(
                "filter-actions-add-to-board",
                ["Add", "Cancel"],
                false,
                0,
                "black"
            )
        )
    );
}

function showLocations(title = "Current Location", index = -1) {
    showDialog(
        title,
        contentPanel(
            search(DESTINATIONS, index) +
            actionList(
                "filter-actions-locations",
                ["apply"],
                false,
                0,
                "black"
            )
        )
    );
}

function showMoodDialog(title = "Mood", index = -1) {
    showDialog(
        title,
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
            label("review", text("Review") + textarea("review")) +
            actionList("", ["cancel", "save"], false, 0, "black")
        )
    );
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

function showAddEventDialog(titleText = "Add Event") {
    showDialog(
        titleText,
        contentPanel(
            [
                label(
                    "Destination",
                    row(
                        // text("Destination") +
                        input(
                            "destination",
                            "text",
                            `placeholder="Destination"`
                        ) + actionButton("...", "search-destination")
                    )
                ),
                selectDateRange("Date Range:"),
                checkBox("Add to Plan", "add-to-plan"),
                actionList("", ["cancel", "apply"], false, 0, "black"),
            ].join("")
        )
    );
}

function showSmartIdeasDialog() {
    showAddEventDialog("Smart Ideas");
}

function showUploadDialog() {
    showDialog("Upload", input("file", "file", "") + actionButton("upload"));
}

function showAddPlace(
    titleText,
    places = [],
    actionText = "Add",
    showWhen = true
) {
    showDialog(
        titleText,
        label(
            "place",
            "Where" + input("place", "text", 'placeholder="Where?"')
        ) +
        places.map((p) => actionItem("right", p, -1, p, "")).join("") +
        (showWhen ? label("place", "When" + input("time", "time")) : "") +
        actionButton(actionText)
    );
}

function showScheduleDialog(
    titleText = "Schedule an Experience",
    places = [],
    actionText = "Add"
) {
    showDialog(
        titleText,
        label(
            "place",
            input(
                "place",
                "text",
                'placeholder="Type name of experience or address"'
            )
        ) +
        places.map((p) => actionItem("right", p, -1, p, "")).join("") +
        selectDateRange("Date Range:") +
        // checkBox("Fills all periods in each day above.", "all-periods") +
        selectTimeRange("When?") +
        actionPanel(actionButton("Cancel") + actionButton("Apply"))
    );
}

function showSchedule(target, action, which, index) {
    showScheduleDialog(
        "Schedule an Experience",
        (places = []),
        (actionText = "Add Experience")
    );
}

function showAddPlaceDialog(target, action, which, index) {
    showAddPlace("Find a Place &amp; Time" + d);
}

function showAddCheckInDialog(target, action, which, index) {
    showAddPlace(
        "Add Item &amp; Check-In " + d,
        ["Loquita", "Pro Sports", "The Creamery"],
        "Add &amp; Check-In",
        false
    );
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
                    <b>Santa Barbara</b> Collections
                </div>
                <div>
                    You can pay back now or settle at the end of the day.
                </div>
            </main>
            <footer>
                <button class="link" onclick="actionClick(event, this, 'close','',-1)">
                    Don't Show Again
                </button>
                <div>
                    <button onclick="actionClick(event, this, 'close','',-1)">
                        Dismiss
                    </button>
                    <button onclick="actionClick(event, this, 'close','',-1)">
                        Open Board
                    </button>
                </div>
            </footer>     
        </div>    
         `
    );
}

function showProfileDialogSelf(target, action, which, index = RUBY) {
    const who = peopleList[index];
    const settings = "Settings TBD.";
    const profile = `    
<div class="profile-connections">${cardGroups(who.groups)}</div>
<div class="profile-main">
  <div class="main-top">
    <div class="main-headshot">
      <img src="images/faces/face${who.id}.png" alt="">
      <div class="headshot-info">
        <div class="headshot-name">${who.name}</div>
        <div class="headshot-location">
          <img src="images/icons/location_on_black_24dp.svg" alt="">
          <span>${who.currentTown}</span>
        </div>
      </div>
    </div>
    <div class="main-options">
      <div class="options-guide">
        <div class="guide-nav">
          <div class="nav-btn">Local Guide</div>
          <a href="#" class="link">Open Guide Profile</a>
        </div>
        <div class="guide-others">
          <div class="others-restaurant">
            <img src="images/icons/icon-restaurants-black.svg" alt="">
          </div>
          <div class="others-activity">
            <img src="images/icons/icon-activity-red.svg" alt="">
          </div>
          <div class="others-landscape">
            <img src="images/icons/icon-landscape-black.svg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="main-bottom">
    <div class="main-interests">${interestList("Your Interests", [
        "Hiking",
        "Vodka",
        "Skiing",
        "Wine Tasting",
        "Santa Barbara",
        "Foodie",
    ], 24)}</div>
  </div>
</div>
`;

    const tabs = tabSet("profile", [
        {name: "Taste-Match Profile", content: profile},
        {name: "Settings", content: settings},
    ], "Taste-Match Profile");
    const content = contentPanel(tabs,"profile-host");
    showDialog("Your Profile", content);
}

function showProfileDialog(target, action, which, index = RUBY) {

    if (index == 0) { //IS THIS THE CURRENT USER? e.g. 0==RUBY
        return showProfileDialogSelf(target, action, which, index);
    }

    const who = peopleList[index];
    const actions = actionPanel(
        ["block", "friend", "follow"]
            .map((actionName) =>
                actionItem(actionName, index, index, actionName, "black", false)
            )
            .join("")
    );
    const other =
        label(
            "",
            "Shared Plans" +
            div(
                "card-tags",
                [...["Brunch - Sunday March 3rd 2022"]]
                    .map(hashTag)
                    .join("")
            )
        ) +
        label(
            "",
            "Interests" +
            div(
                "card-tags",
                [
                    ...[
                        "Skiing",
                        "Fine Dining",
                        "Wine Tasting",
                    ],
                ]
                    .map(hashTag)
                    .join("")
            )
        ) +
        label(
            "",
            "Boards" +
            div(
                "card-tags",
                [
                    ...[
                        "Santa Barbara - Linked",
                        "Paris. Link?",
                        "Seattle",
                    ],
                ]
                    .map(hashTag)
                    .join("")
            )
        ) +
        cardGroups(who.groups) + actions;

    const content = contentPanel(
        person(who) + (index === 0 ? "" : other),
        "profile"
    );

    showDialog("Profile", content);
}

function collapseCard(target) {
    target.closest(".card").classList.toggle("collapsed");
}

function edit(target, action, which, id) {
    if (which === "mood") {
        showMoodDialog();
    } else if (which === "location") {
        showLocations();
    }
}

function openPage(target, action, which, id) {
    // debugger;
    if ("open" === action && which.toLowerCase().startsWith("http")) {
        window.open(which, "_self");
    } else if ("open" === action && "connect" === which) {
        showPage("connect_person", "open", id);
    } else if ("open" === action || "explore" === action) {
        showPage(which, action, id);
    } else if ("person" === action) {
        showPage("connect_person", "open", id);
    } else if ("split" === action) {
        showPage("settle_split", "open", id);
    } else if ("board" === action) {
        showPage("collect", "collect", id);
    } else {
        console.log("can't openPage", target, action, which, id);
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
    // schedule: "Added to your Plan",
    decline: "Declined Invitation",
    settle: "Payment Settled",
    "remind-all": "Reminders Sent",
    "settle-all": "Payments Sent",
    zelle: "Payment Settled",
    paypal: "Payment Settled",
    venmo: "Payment Settled",
    verify: "Verified",
    notify: "Notification Sent",
};

function addItem(target, action, which, id) {
    if ("person" === which) {
        showSearch(`${action} ${which}`, id);
    } else if ("message" === which) {
        addMessage();
    } else if ("connect" === which) {
        addParticipant();
    } else if ("collection" === which) {
        showAddCollection();
    } else if ("collect_board" === which) {
        showAddCard();
    } else if ("cardItem" === which) {
        showAddCard();
    } else if ("timeline" === which) {
        showSchedule(target, action, which, id);
    } else if ("attachment" === which) {
        showAddCard("Add Something to Message:");
    } else {
        console.log("can't addItem", ...arguments);
    }
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function handleRight(target, action, which, id) {
    if ("Loquita" === which) {
        let cardList = get(".timeline.page .card-list");
        const cps = cardList.querySelectorAll(".is-current-period");
        if (cps && cps.length > 1) {
            let ve = VitaEvent(getPeriods()[current_period], "restaurants");
            ve.titleText = "Loquita";
            ve.subtitleText = "";
            ve.actions = [];
            ve.tags = [];
            const div = document.createElement("div");
            div.innerHTML = timelineCard(ve);
            let e = div.children[0];
            e.querySelectorAll(".card-actions")[0].remove();
            insertAfter(e, cps[1]);
            cardList.scrollTop = e.offsetTop - 100;
        }
    }
    hideDialog();
}

function apply(target, action, which, id) {
    if ("filter-things-to-do" === which) {
        getAll(".page.explore .explore.card").map(hideElement);
        getAll(".page.explore .explore.card.things-to-do").map(showElement);
    } else if ("filter-actions-restaurants" === which) {
        getAll(".page.explore .explore.card").map(hideElement);
        getAll(".page.explore .explore.card.restaurants").map(showElement);
    } else if ("filter-actions-lodging" === which) {
        getAll(".page.explore .explore.card").map(hideElement);
        getAll(".page.explore .explore.card.filter-actions-lodging").map(
            showElement
        );
    } else {
        // console.log(`APPLY ${target} ${action} ${which} ${id}?`)
    }
}

ACTION_PAGES = {
    apply: apply,
    back: () => showPage(window.lastPage),
    chat: addItem,
    connect_chat: () => showPage("connect_chat"),
    explore: openPage,
    open: openPage,
    settle_split: openPage,
    split: openPage,
    "create-new-group": createGroup,
    "add-participant": addParticipant,
    add: addItem,
    contact: addContact,
    new: addItem,
    search: showDestinations,
    "search-destination": showDestinations,
    invite: sendInvite,
    more: addPerson,
    hide: hideDialog,
    collapse: collapseCard,
    right: handleRight,
    show: toggleCollapse,
    "map-on": toggleMap,
    "map-off": toggleMap,
    person: showProfileDialog,
    match: showMatchDialog,
    upload: showUploadDialog,
    "smart-ideas": showSmartIdeasDialog,
    "add-place": showAddPlaceDialog,
    "check-in": showAddCheckInDialog,
    edit: edit,
    review: showReviewDialog,
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
    let img = target.querySelectorAll("img")[0];
    const src = img.getAttribute("src");

    if (src == "images/icons/icon-map-on.svg") {
        img.setAttribute("src", "images/icons/icon-map-off.svg");
    } else {
        img.setAttribute("src", "images/icons/icon-map-on.svg");
    }

    get(".map").classList.toggle("hidden");
}

function route(target, action, which = "", index = "") {
    const lower = action.toLowerCase();

    if (TOAST_MESSAGES.hasOwnProperty(lower)) {
        return showToast(TOAST_MESSAGES[lower]);
    } else if (ACTION_PAGES.hasOwnProperty(lower)) {
        const f = ACTION_PAGES[lower];
        return f(target, lower, which, index);
    } else {
        console.log("UNKNOWN ACTION:" + lower);
    }
}
