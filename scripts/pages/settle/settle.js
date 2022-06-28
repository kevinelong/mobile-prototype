let PAY_REQUEST_PAGES = PaneSet("taste-match", "add-person");

let SPLIT_PAGES = PaneSet("split-pages", "add-split");

PAY_REQUEST_PAGES.add("add-person", Pane(`
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            STEP 1: Add Person/People
        </div>
    </div>
</div>
` + div("question-control",
            "Search for, and add people to pay, by name, email, or mobile number."
        ) +
        row(
            search([], -1, "Type search text") +
            actionItem("sort", "", "", "", "black")) +
        div("autocomplete",
            listPeople(name, peopleList, "", "right")
        )
        ,
        [
            PaneAction("NEXT", "expenses"),
        ]
    )
);

function getAddExpense() {
    return label("add-expense",
        `Add Expense Detail &amp; Earn Rewards. (Optional) ` +
        input("expense-name", "text", `placeholder="Expense Name"`) +
        row(
            calendarControl("expense-date") +
            timeControl("expense-date")
            , "", "spread") +
        row(
            select("category", [
                {name: "Restaurant", value: ""},
                {name: "Lodging", value: ""},
            ], `placeholder="Category"`)
            , "", "spread") +
        row(
            text("$") +
            input("amount", "text", `placeholder="0.00"`) +
            button("Add")
        )
    )
}

PAY_REQUEST_PAGES.add("expenses", Pane(`
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            STEP 2: Add Expense Amount &amp; Details
        </div>
        <div class="question-control row">
            <div class="text">
                You're preparing to pay:
            </div>
            <div class="selected-people">
                Kevin L.
            </div>
        </div>
    </div>
</div>
` + label("upload", "(Optional)" +
            button("Upload Receipt")
        ) + label("checking-in-label",
            "Checking-In? (Optional)" +
            choiceSet("checking-in", [
                "Yes",
                "No",
                "Already Checked-In",
            ], "Yes")
        ) +
        getAddExpense() +
        link("Reset (Clear All)", "", "left") +
        label(
            "list",
            "Expense List:" +
            cardList(
                paymentCard(
                    "restaurants",
                    "The Boathouse Cafe",
                    "Tuesday 12/2/2022 Manual Check-In at 1:01 pm",
                    "$36.33",
                    [],
                    ["remove"],
                    "",
                    "",
                    "",
                    "",
                    VitaEvent(Period("Lunch", "12/2/2022 1:00 pm", ""), "restaurants", ""),
                    "",
                    "",
                    "",
                    ""
                )
            )
        ),
        [
            PaneAction("BACK", "add-person"),
            PaneAction("PAY", "finish"),
        ]
    )
);

SPLIT_PAGES.add("add-split", Pane(`
<div class="taste-match-page page1">
    <div class="question-heading">
        <div class="title-control">
            Create New Split
        </div>
        <div class="question-control row">
            <div class="text">
            </div>
            <div class="selected-people">
                Kevin L. (added)
            </div>
        </div>
    </div>
</div>
` + div("question-control",
            "Search for, and add people, by name, email, or mobile number."
        ) +
        row(
            search([], -1, "Type search text") +
            actionItem("sort", "", "", "", "black")) +
        div("autocomplete",
            listPeople(name, peopleList, "", "right")
        ) + actionList(
            "filter",
            ["Create New Group", "Add New Contact"],
            false,
            0,
            "black"
        ) +
        actionButton("Finish and Send", "close")
        , [])
);

const payContent = div("pane-host",
    actionButton("Add Payment", "add", "payment")
);

const requestContent = "Request";

const ts = tabSet("pay-request-subs", [
    {name: "Pay", content: payContent},
    {name: "Request", content: requestContent},
], "Pay");

const payRequestContent = div("tab-set PAY-REQUEST hidden", title(
    search([], -1, "") +
    actionItem("chat", "pay", -1, "", "black")
) + ts);

function historyItem(data) {
    return historyCard(data.kind, data.name, data.when, data.amount, data.groups);
}

function splitItem(data) {
    return splitCard(data.kind, data.name, data.when, data.amountOwedToMe, data.amountIOwe,  data.groups, data.isSettled);
}

const groups = [
    {
        people: three_people,
        title: "Split with",
        groupName: "participant",
        subtitle: "",
    },
];

const historyContent = div("tab-set HISTORY hidden",
    row(
        actionItem("search", "", "", "", "black") +
        div("title centered", "$2000.50 in VITA WALLET") +
        actionItem("sort", "", "", "", "black")
        , "", "spaced") +
    cardList([
            {
                kind: "received",
                amount: 50,
                name: "Rewards Credit",
                when: "Today",
                groups: []
            },
            {
                kind: "sent",
                amount: -459,
                name: "Outgoing Transfer Complete",
                when: "Yesterday",
                groups: []
            },
            {
                kind: "sent",
                amount: 5,
                name: "VITA Card Cash Back",
                when: "March 17th",
                groups: []
            },
            {
                kind: "restaurants-black",
                amount: -50,
                name: "Foxen Vineyard Wine Tasting Tour",
                when: "March 16th",
                groups: groups
            },
            {
                kind: "restaurants-black",
                amount: 50,
                name: "Lunch",
                when: "March 16th",
                groups: groups
            },
            {
                kind: "restaurants-black",
                amount: 50,
                name: "Dinner",
                when: "March 16th",
                groups: groups
            },
        ].map(historyItem).join("")
    )
);

const transferMoneyContent = col(
    label(
        "title centered spaced",
        "$2000.50 in VITA WALLET") +
    label("docs", `
        Select
        where to transfer
        from and click
        start
        transfer.
    `) + contentPanel(
        selectOptionsComponent("From:", [{name: "My Bank"}]) +
        selectOptionsComponent("To:", [{name: "VITA WALLET"}]),
        "", "center") +
    button("Start Transfer")
);

const creditCardContent = col(
    label(
        "title centered spaced",
        "$2000.50 in VITA WALLET") +
    label("bulletin",
        `
        <div>VITA CREDIT CARD</div>
<div>Buy anything with your crypto.</div>
<div>Don't spend it.</div>
<a href="#">learn more</a>`
    ) + button("Move Up the List") +
    label("bulletin", `
    After joining the waitlist, 
    click the referral button to access your referral code, 
    then invite friends and check your position.
    `)
)

const cryptoContent = col(
    label(
        "title centered spaced",
        "$2000.50 in VITA WALLET") +
    label("bulletin",
        `
        <div>Loans backed by Crypto.</div>
<div>Don't sell your crypto, borrow against it.</div>
<a href="#">learn more</a>`
    ) +
    label("docs", `
    <p>
        <h4>
            What it is:
       </h4>
        <div>
            Loans secured by your crypto.
        </div>
    </p>
    <p>
        <h4>
               Crypto backed loan
        </h4>
        <div>
            Use your crypto as collateral
        </div>
    </p>
    <p>
        <h4>
               The Difference
        </h4>
        <div>
            What makes us stand out
        </div>
    </p>
    <p>
        <h4>
               Our Process
        </h4>
        <div>
                How to get a loan
        </div>
    </p>
    <p>
        <h4>
               Security &amp; Controls
        </h4>
        <div>
                Keeping your assets safe
        </div>
    </p>
    `)
);

const saveContent = col(
    label(
        "title centered spaced",
        "$2000.50 in VITA WALLET") +
    label("bulletin",
        `
        <div>Save as you go!</div>
<div>Save a little for future plans with every transaction</div>
<a href="#">learn more</a>`
    ) +
    button("Start Saving Now!")
);

const walletContent = div("tab-set WALLET hidden",
    tabSet("wallet-tabs", [
        {name: "Transfer Money", content: transferMoneyContent},
        {name: "Credit Card", content: creditCardContent},
        {name: "Crypto", content: cryptoContent},
        {name: "Save-Up", content: saveContent},
    ], "Transfer Money")
);

const splitContent = div("tab-set SPLIT",
    div("padded row",
        actionItem("search", "", "", "", "black") +
        actionButton("Create New Group Split", "add", "split") +
        actionItem("settings", "settings", "", "Settings", "black", true),
        "",
        "spaced"
    ) +
    cardList(
        // title("Unsettled:") +
        [
            {
                kind: "GROUP-CHAT",
                amountOwedToMe: 528.00,
                amountIOwe: 11.11,
                name: "Group Split: Ongoing",
                when: "",
                groups: groups,
                isSettled: false
            },
            {
                kind: "person",
                amountOwedToMe: 0,
                amountIOwe: 0,
                name: "1 on 1 Split: Ongoing",
                when: "",
                groups: [{
                    people: [peopleList[JOE]],
                    title: "",
                    groupName: "",
                    subtitle: "",
                },],
                isSettled: true
            },
            {
                kind: "person",
                amountOwedToMe: 0,
                amountIOwe: 0,
                name: "1 on 1 Split: Ongoing",
                when: "",
                groups: [{
                    people: [peopleList[BF]],
                    title: "",
                    groupName: "",
                    subtitle: "",
                },],
                isSettled: true
            },
        ].map(splitItem).join("")
    )
);

function settlePage(selected = false) {
    return page(
        selected,
        "settle",
        "Settle",
        ["Pay-Request", "Split", "History", "Wallet"],
        "Split",
        payRequestContent + splitContent + historyContent + walletContent,
        "",
        "",
        "",
        "",
        [],
        "",
        "",
        "",
        actionItem("add", "expense", -1, "Add Expense", "black"),
    );
}

function addPayment() {
    showDialog(
        "Add Payment:",
        div("pane-host",
            panes(PAY_REQUEST_PAGES)
        )
    );
}

function addSplit() {
    // debugger;
    showDialog(
        "Create New Split Group",
        div("pane-host",
            panes(SPLIT_PAGES)
        )
    );
}
function addExpense(target, action, which, id){
    const NAMED_GROUPS = [
        {
            name: "The Gang",
            people: three_people
        }
    ];

    const namedGroup = (g) => {
        return row(
            text(g.name) +
            [...g.people].map(p => cardPerson(p, p.id - 1, 9, p.id - 1)).join("")
            + actionItem("Add")
            ,"","named-group");
    };

    const myGroups = stack(text([
            "Kevin",
            "Greg",
            "Ahn",
        ].join(", ")) +
        input("search-groups", "text", `placeholder="type name, email, or # to add participant"`) +
        div("results", NAMED_GROUPS.map(namedGroup).join("")) +
        button("Create New Group")
    );

    const myNetwork = [
            "Paul",
            "Richard",
            "Harry",
        ].join(", ") +
        input("search-network", "text", `placeholder="type name, email, or # to add participant"`) +
        div("results") +
        button("Create New Group");

    showDialog("STEP 1 - Select Split Group",
        stack(
            tabSet("select-group-mode", [
                tabData("groups", myGroups),
                tabData("network", myNetwork),
            ], "groups")
        )+
        spread(button("Next", `onclick="addExpense2('${target}', '${action}', '${which}', '${id}')"`))
    );
}
function addExpense2(target = this, action="add", which="expense", id=-1){

    showDialog("STEP 2 - Add Expense",
        row(
            stack([
                    button("Upload Receipt..."),
                    spread(div("centered", "OR")),

                    label("spread nowrap",
                        div("nowrap","Amount $") +
                        rack(
                            input("add-expense-amount", "text", `value="" placeholder="0.00"`) +
                            actionItem("edit", "", -1, "Edit Split")
                        )
                    ),
                    input("add-expense-description", "text", `value="" placeholder="description"`),
                    contentPanel(
                        spread(
                            text("(optional) Add Detail and earn rewards!") +
                            actionItem("show")
                        )
                    )
                ].join("")
            ),
            "",
            "collapse"
        ) +
        div("card-list collapse",
            select("Category", [
                    { name: "Select Category"},
                    { name: "Activity"},
                    { name: "Dining"},
                    { name: "Landmark"},
                    { name: "Lodging"}
            ]) +
            input("", "text", `placeholder="Begin Typing: Venue/Business Name"`) +
            row(
                selectDate(
                    "When:",
                    // "1996-08-17"
                ) +
                selectTime(
                    "&nbsp;",
                    // "13:08"
                )
            ) +
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
function addExpenseKevin() {
    showDialog("Add Expense",
        contentPanel([
                label("Who",
                    text("Who") +
                    input("who", "text", `value="" placeholder="Begin Typing"`) +
                    hashTags(["Kevin", "Greg", "+"])
                ),
                label("row",
                    text("Amount $") +
                    rack(
                        input("", "text", `value="" placeholder="0.00"`) +
                        actionItem("edit", "",-1,"Split")
                    )
                ),
                labeledInput("Description", "text", `value="" placeholder="Begin Typing"`),
                labeledInput("Location", "text", `value="" placeholder="Begin Typing"`),
                label("date-time",
                    text("When") +
                    selectDate() + selectTime()
                ),
                actionList("filter-people", applyOrCancel, false, 0, "black"),
            ].join("")
        )
    );
}
