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
            choiceSet(
                "search-filter",
                ["All", "Connections", "Groups", "Contacts"],
                "All"
            ) +
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
                            "Co-Planners",
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
            {
                name: "Favorite",
                value: "Favorite",
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
function showAddExploreCard(target, action, which, id) {
    showDialog("STEP 1 - Find Existing",
        stack(
            tabSet("select-group-mode", [
                tabData("By URL",
                    div("by-site padded centered",
                        input("search-text", "text", "placeholder=\"http://example.com\"")
                    ,"")
                ),
                tabData("Near Me", label("near-me", "Locations Near Me")),
                tabData("Manually", "Click Next"),
            ], "By URL")
        ) +
        spread(button("Next", `onclick="showAddExploreCard2('${target}', '${action}', '${which}', '${id}')"`))
    );

}

function showAddExploreCard2(target = this, action = "add", which = "expense", id = -1) {

    showDialog("STEP 2 - Add Activity Card",
        row(
            stack([
                labeledInput("Name"),
                // labeledInput("Type"),
                // labeledInput("Category"),
                // labeledInput("Location"),
                ].join("")
            ),
            "",
            ""
        ) +
        div("card-list",
            select("Category", [
                {name: "Select Category"},
                {name: "Activity"},
                {name: "Dining"},
                {name: "Landmark"},
                {name: "Lodging"}
            ]) +
            input("venue", "text", `placeholder="Begin Typing: Venue/Business Name"`) +
            // row(
            //     selectDate(
            //         "When:",
            //         (new Date(id)).getTime(),
            //         // "1996-08-17"
            //     ) +
            //     selectTime(
            //         "&nbsp;",
            //         // "13:08"
            //     )
            // ) +
            row(
                // radioControl("occasion-type", [
                //     {
                //         name: "occasion-type",
                //         value: "Business"
                //     },
                //     {
                //         name: "occasion-type",
                //         value: "Personal"
                //     },
                // ])
                radioInput("occasion-type", "Business") +
                radioInput("occasion-type", "Personal", `checked="checked"`)
            )
        )
        + actionList("add-expense", applyOrCancel, false, id, "black")
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
        "Rate & Review",
        contentPanel(
            col(
                label("rate", text("Rate")) +
                ratingAction() +
                label("review", text("Review") + textarea("review")),
                "",
                'review-dialog'
            )
            +
            actionList("", ["cancel", "save"], false, 0, "black")
        )
    );
}


function showSort(target, action, which, id) {
    showDialog(
        "Sort",
        contentPanel(
            label("", text("Sort By:") +
                radioComponent("", which.split(",").map(s => radioOptionItem(s))) +
                actionList("", ["apply"], false, 0, "black")
            )
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

function showVerifyDialog() {
    showDialog("Verify",
        label("verified",
            rack(
                input("file", "checkbox", "") +
                text("Verified.")
            )
        ) + actionButton("Close")
    );
}


function showSplitDialog() {
    showDialog("Split",
        label("split",
            rack(
                text("Expense will be split evenly.") +
                link("Click here to edit the split.")
            )
        ) + actionButton("Close")
    );
}


function timeStringToArrayHHMM(time) {
    time = time.toUpperCase();
    var hours = Number(time.match(/^(\d+)/)[1]);
    var minutes = Number(time.match(/:(\d+)/)[1]);
    var AMPM = time.match(/\d+:\d+(.*)$/)[1];
    if (AMPM === "PM" && hours < 12) hours = hours + 12;
    if (AMPM === "AM" && hours === 12) hours = hours - 12;
    return [hours, minutes];
}

function showAddPlace(
    titleText,
    places = [],
    actionText = "Add",
    showWhen = true,
    when = undefined,
    start = "12:00 AM"
) {
    let dateValue = new Date(when);
    let startValue = new Date(start);
    // const timeParts = timeStringToArrayHHMM(start);
    dateValue.setHours(startValue.getHours());
    dateValue.setMinutes(startValue.getMinutes());
    dateValue.setSeconds(0);
    dateValue.setMilliseconds(0);

    showDialog(
        titleText,
        // label(
        //     "place",
        //     "Where" + input("place", "text", 'placeholder="Where?"')

        div("place-search", "", `style="height:400px"`) +
        // places.map((p) => actionItem("right", p, -1, p, "")).join("") +
        (showWhen ? label("place", "When <br>" + selectDate("", dateValue).toLocaleString() + selectTime("", dateValue).toLocaleString()) : "") +
        (when ? when.toString() : "no date") +
        (start ? start.toString() : "no start") +
        actionButton(actionText, "apply", "place", when, start)
    );

    get(".place-search").appendChild(
        filtered(
            EXPLORE_DATA.map(item => ({
                id: item[EXPLORE_INDEX],
                name: item[EXPLORE_NAME]
            })),
            // data.map(o => ({id: o.id, name: `${o.first} ${o.last}`})),
            "id",
            "name"
        )
    );
}

function showScheduleDialog(
    titleText = "Schedule an Experience",
    places = [],
    actionText = "Add",
    hidePlaces = false
) {
    showDialog(
        titleText,
        (hidePlaces ? "" :
                label(
                    "place",
                    input(
                        "place",
                        "text",
                        'placeholder="Type name of experience or address"'
                    )
                ) +
                places.map((p) => actionItem("right", p, -1, p, "")).join("")
        ) +
        selectDateRange("Date Range:") +
        // checkBox("Fills all periods in each day above.", "all-periods") +
        selectTimeRange("When?") +
        actionPanel(actionButton("Cancel") + actionButton("Apply"))
    );
}

function showSchedule(target, action, which, index) {
    debugger;
    showScheduleDialog(
        "Schedule an Experience",
        (places = []),
        (actionText = "Add Experience")
    );
}

function schedule(target, action, which, index) {
    showScheduleDialog(
        "Schedule an Experience",
        [],
        "Schedule Experience",
        true
    );
}

function paymentType(kind, name, selected) {
    return choice(kind, name, selected)
}

function showAddPlaceDialog(target, action, which, index) {
    showAddPlace("Find a Place &amp; Time", [], "Add", true, which, index);
}

function payCard(p = {}) {
    return div("card settle row",
        person(p) +
        col(
            div("nowrap", p.paymentSplit) +
            row(p.paymentTypes.map((o, i) => paymentType("payment-type", o, 0 == i)).join(""))
        ) +
        stack(
            amount(p.paymentAmount) +
            div("tiny-text nowrap centered", "Amount Owed")
        )
    );
}

function showPay(target, action, which, index) {
    showDialog(
        "Pay All",
        helpText("Select a Pay-Type for each recipient, then click Pay-All.") +
        cardList(peopleList.filter((v, i) => i > 0).map(payCard).join("")) +
        actionPanel(actionButton("Cancel") + actionButton("Pay All"))
    );
}

function showRequest(target, action, which, index) {
    showDialog(
        "Request All",
        helpText("Select a Pay-Type for each recipient, then click Request-All.") +
        cardList(peopleList.filter((v, i) => i > 0).map(payCard).join("")) +
        actionPanel(actionButton("Cancel") + actionButton("Request All"))
    );
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
    const settings = button("TasteMatch", `onclick="self.location='taste_match.html';"`);
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
          <button class="nav-link">Open Guide Profile</button>
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
    <div class="main-interests">${interestList(
        "Your Interests",
        [
            "Hiking",
            "Vodka",
            "Skiing",
            "Wine Tasting",
            "Santa Barbara",
            "Foodie",
        ],
        24
    )}</div>
  </div>
</div>
`;

    const tabs = tabSet(
        "profile",
        [
            {name: "Profile", content: profile},
            {name: "Settings", content: settings},
        ],
        "Profile"
    );
    const content = contentPanel(tabs, "profile-host");
    showDialog("Your Profile", content);
}

function showProfileDialog(target, action, which, index = RUBY) {
    if (index == 0) {
        //IS THIS THE CURRENT USER? e.g. 0==RUBY
        return showProfileDialogSelf(target, action, which, index);
    }
    const groups = [
        {
            people: peopleList,
            title: "Friends with",
            groupName: "person",
            subtitle: "",
        },
        // {
        //     people: [peopleList[BF]],
        //     title: "Linked To",
        //     groupName: "currator",
        //     subtitle: "",
        // },
        // {
        //     people: [peopleList[BF], peopleList[JOE]],
        //     title: "Plans With",
        //     groupName: "Co-Planner",
        //     subtitle: "",
        // },
        {
            people: [peopleList[BF], peopleList[JOE]],
            title: "Followed By",
            groupName: "person",
            subtitle: "",
        },
        {
            people: [peopleList[BF], peopleList[JOE]],
            title: "Following",
            groupName: "person",
            subtitle: "",
        },
    ];

    const groupElements = cardGroups(groups);

    const interests = ["Hiking", "Vodka"];

    const interestsShared = [
        "Skiing",
        "Wine Tasting",
        "Santa Barbara",
        "Foodie",
    ];

    const interestHTML =
        interestList("Shared Interests", interestsShared) +
        interestList("Other Interests", interests);

    const boards = cardList(
        [
            collectCard(
                "Santa Barbara",
                "California",
                [],
                "collect_board",
                1,
                "images/photos/santa_barbara_1500x500.jpg",
                [
                    {
                        people: peopleList,
                        title: "Linked with",
                        groupName: "Curator",
                        subtitle: "23 cards shared",
                    },
                    {
                        people: peopleList,
                        title: "Related Collections",
                        groupName: "Person",
                        subtitle: "from 23",
                    },
                ]
            ),
            collectCard(
                "Paris",
                "France",
                [],
                "collect_board",
                2,
                "images/photos/paris_france.jpg",
                [
                    {
                        people: [peopleList[JOE]],
                        title: "Linked with",
                        groupName: "Curator",
                        subtitle: "2 cards shared",
                    },
                ]
            ),
        ].join("")
    );

    const plans = div(
        "card-list",
        title("ONGOING") +
        planCard(
            "Santa Barbara",
            "Tuesday March 3rd<br>Monday March 10th",
            "8 Activities Planned",
            [
                {
                    people: peopleList,
                    title: "Going with",
                    groupName: "Co-Planner",
                    subtitle: "8 activities planned",
                },
            ],
            [],
            "images/photos/santa_barbara_1500x500.jpg"
        ) +
        title("UPCOMING") +
        planCard(
            "Paris France",
            "Tuesday September 3rd<br>Monday September 9th",
            "12 Activities Planned",
            [
                {
                    people: [peopleList[JOE]],
                    title: "Going with",
                    groupName: "Co-Planner",
                    subtitle: "2 activities planned",
                },
            ],
            [],
            "images/photos/paris_france.jpg"
        )
    );

    const tab_content = tabSet(
        "boards-plans",
        [
            {name: "Boards", content: boards},
            {name: "Plans", content: plans},
        ],
        "Boards"
    );

    const who = peopleList[index];
    const main = `
        <div class="profile-main">
            <div class="main-top">
            <div class="main-headshot">
                <img src="images/faces/face3.png" alt="">
                <div class="headshot-info">
                <div class="headshot-name">Betty Ford</div>
                <div class="headshot-location">
                    <img src="images/icons/location_on_black_24dp.svg" alt="">
                    <span>Los Angeles</span>
                </div>
                </div>
            </div>
            <div class="main-options">
                <div class="options-guide">
                <div class="guide-nav">
                    <div class="nav-btn">Local Guide</div>
                    <button class="nav-link">Open Guide Profile</button>
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
    `;

    const actions = `
        <div class="profile-icons">
            <div class="icon-group">
            <div class="icon">
                <img src="images/icons/icon-connect_chat-black.svg" alt="">
                chat
            </div>
            <div class="icon">
                <img src="images/call_black_24dp.svg" alt="" class="src">
                phone
            </div>
            <div class="icon">
                <img src="images/videocam_black_24dp.svg" alt="" class="src">
                video
            </div>
            </div>
            <div class="icon-group">
            <div class="icon">
                <img src="images/icons/icon-friend-black.svg" alt="" class="src">
                friend
            </div>
            <div class="icon">
                <img src="images/icons/icon-follow-black.svg" alt="" class="src">
                follow
            </div>
            <div class="icon">
                <img src="images/icons/icon-block-black.svg" alt="" class="src">
                block
            </div>
            </div>
        </div>
        <div class="profile-connections">
            ${groupElements}
        </div>
    `;

    const bottom = `
        <div class="main-bottom">
            ${interestHTML + tab_content}
        </div>
    `;

    const content = main + actions + bottom;
    const final = contentPanel(content, "profile-host");
    showDialog("Profile", final);
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
        if (which === "explore_detail") {
            const ed = get(".explore_detail .content-panel");
            ed.innerHTML = exploreCardDetail(...EXPLORE_DATA[id]);
        }
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
    // schedule: "Added to your Plan",
    decline: "Declined Invitation",
    settle: "Payment Settled",
    "remind-all": "Reminders Sent",
    "settle-all": "Payments Sent",
    zelle: "Payment Settled",
    paypal: "Payment Settled",
    venmo: "Payment Settled",
    notify: "Notification Sent",
};

function acceptInvite(target, action, which, id) {
    EXPLORE_DATA[6][13][0].participants[0].status = "Going";
    const ed = get(".explore_detail .content-panel");
    ed.innerHTML = exploreCardDetail(...EXPLORE_DATA[6]);
    showToast("Invitation Accepted!");
}

function payEvent(target, action, which, id) {
    EXPLORE_DATA[6][13][0].participants[0].paid = true;
    const ed = get(".explore_detail .content-panel");
    ed.innerHTML = exploreCardDetail(...EXPLORE_DATA[6]);
    showToast("Payment Received!");

    window.kaching.play();

}

function addItem(target, action, which, id) {
    if ("person" === which) {
        showSearch(`${action} ${which}`, id);
    } else if ("message" === which) {
        addMessage();
    } else if ("payment" === which) {
        addPayment();
    } else if ("expense" === which) {
        addExpense(target, action, which, id);
    } else if ("split" === which) {
        addSplit();
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
    } else if ("explore" === which) {
        showAddExploreCard(target, action, which, id);
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

        // Gets all three lunch periods
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

            // Today lunch not yesterday or tomorrow
            insertAfter(e, cps[1]);

            cardList.scrollTop = e.offsetTop - 100;
        }
    }
    hideDialog();
}

function isValidDateString(text = "") {
    const d = new Date(text);
    const result = d.toString();
    return result === text;
}

function apply(target, action, which, id = -1) {
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
    } else if ("place" === which) {
        const selectElement = get(".filtered select");
        if (!selectElement) {
            return;
        }
        const whereValue = selectElement.selectedOptions[0].value;

        const timeElement = get(`.dialog input[type="time"]`);
        if (!timeElement) {
            return;
        }
        const timeValue = timeElement.value;

        const dateElement = get(`.dialog input[type="date"]`);
        if (!dateElement) {
            return;
        }
        const dateValue = dateElement.value;

        console.log("SAVE NEW EVENT", dateValue, timeValue, whereValue);

        let when = new Date(`${dateValue}T${timeValue}:00`);
        // TODO Update "when" with time portion

        const cd = cardData(...EXPLORE_DATA[whereValue])

        EVENTS_DATA.push(new VitaEvent(
            Period(),
            cd.kind,
            "",
            "",
            cd.title,
            when,
            cd
        ));

        // [X] Save event to global events list here
        // [X] Enhance timeline to consume from global events list where timeline is rendered
        // TODO Redraw timeline here
        get(".timeline.page").outerHTML = timelinePage(true);
        initScroll();

    } else if ("add-expense" === which) {
        let index = 0;
        SETTLE_GROUP_DATA.list.forEach((record, i) => {
            if (record.dateText === id) {
                index = i
            }
        })

        const day = get(`.settle_split .card-list > .day[data-index="${index}"]`); //first one for now.
        debugger;
        const amount = get(".add-expense-amount").value;
        const description = get(".add-expense-description").value;

        // const index = day.dataset.index;
        let data = SETTLE_GROUP_DATA.list[index];
        let expenseRecordList = data.expenseList;

        data.addExpense(new ExpenseRecord(description, parseFloat(amount)));
        updateBalance(day, expenseRecordList, data, SETTLE_GROUP_DATA);

    } else {
        // console.log(`APPLY ${target} ${action} ${which} ${id}?`)
    }
}

let earned = 0;
let points = 5;

function animatePoints() {
    window.kaching.play();

    const earnedElement = get(".earned");
    const pointsElement = get(".points");
    pointsElement.style.position = "absolute";
    pointsElement.style.bottom = "0";

    pointsElement.style.transition = "all 1000ms ease-in-out ";

    showElement(pointsElement);
    const dx = (earnedElement.offsetLeft - pointsElement.offsetLeft) + (pointsElement.offsetWidth / 2);
    const dy = (earnedElement.offsetTop - pointsElement.offsetTop) + pointsElement.offsetHeight + earnedElement.offsetHeight;
    pointsElement.style.transform = `translate3d(${dx}px,${dy}px,0)`;

    setTimeout(() => {
        pointsElement.style.transition = "";
        hideElement(pointsElement)
        pointsElement.style.transform = "";
        earned += points;
        earnedElement.innerHTML = `${earned}pts earned`
    }, 1000);

}

function onCloseDialog() {

}

const ACTION_PAGES = {
    "add-participant": addParticipant,
    "add-place": showAddPlaceDialog,
    "check-in": showAddCheckInDialog,
    "create-new-group": createGroup,
    "map-off": toggleMap,
    "map-on": toggleMap,
    "pay-all": showPay,
    "request-all": showRequest,
    "search-destination": showDestinations,
    "smart-ideas": showSmartIdeasDialog,
    add: addItem,
    accept: acceptInvite,
    apply: apply,
    back: () => showPage(window.lastPage),
    chat: addItem,
    close: onCloseDialog,
    collapse: collapseCard,
    connect_chat: () => showPage("connect_chat"),
    contact: addContact,
    edit: edit,
    explore: openPage,
    hide: hideDialog,
    invite: sendInvite,
    match: showMatchDialog,
    more: addPerson,
    new: addItem,
    open: openPage,
    pay: payEvent,
    payment: addPayment,
    "show-pin": showPin,
    "hide-pin": hidePin,
    person: showProfileDialog,
    review: showReviewDialog,
    right: handleRight,
    schedule: schedule,
    search: showDestinations,
    settle_split: openPage,
    show: toggleCollapse,
    sort: showSort,
    split: showSplitDialog,
    upload: showUploadDialog,
    verify: showVerifyDialog,
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
    if (!card_list || !card_list.classList.contains("card-list")) {
        return false;
    }

    card_list.classList.toggle("collapse");
    return true;
}

function showPin(target) {
    const mp = target.closest(".map-panel");
    const card = mp.querySelector(".card");
    card.style.display = "block";
}

function hidePin(target) {
    const mp = target.closest(".map-panel");
    const card = mp.querySelector(".card");
    card.style.display = "none";
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

function route(target, action, which = "", index = "", data = {}) {
    const lower = action.toLowerCase();

    console.log("click", window.currentPage, window.currentDialog, lower, which, index, target, data);

    if (TOAST_MESSAGES.hasOwnProperty(lower)) {
        return showToast(TOAST_MESSAGES[lower]);
    } else if (ACTION_PAGES.hasOwnProperty(lower)) {
        const f = ACTION_PAGES[lower];
        return f(target, lower, which, index);
    } else {
        console.log("UNKNOWN ACTION:'" + lower + "' ", which, index, target, data);
    }
}
