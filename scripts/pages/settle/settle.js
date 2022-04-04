function dashBoardItem(titleText = "", valueText = "", actionName = "") {
    return contentPanel(
        col(
            [
                title(valueText),
                text(titleText),
                actionItem(actionName, "settle", -1, actionName, "", false),
            ].join("")
        ),
        "dashboard-item"
    );
}

function dashboard(items) {
    return row(items.join(""));
}

let PAY_REQUEST_PAGES = PaneSet("taste-match", "add-person");

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
        ) + label("add-expense",
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
        ) +
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


const payContent = div("pane-host",
    actionButton("Add Payment", "add", "payment")
);

const requestContent = "Request";

const ts = tabSet("pay-request-subs", [
    {name: "Pay", content: payContent},
    {name: "Request", content: requestContent},
], "Pay");

const payRequestContent = div("tab-set PAY-REQUEST", title(
    search([], -1, "") +
    actionItem("chat", "pay", -1, "", "black")
) + ts);

function historyItem(data) {
    return historyCard(data.kind, data.name, data.when, data.amount, data.groups);
}

const groups = [
    {
        people: three_people,
        title: "Split with",
        groupName: "participants",
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

const splitContent = div("tab-set SPLIT hidden",
    row(
        actionItem("search", "", "", "", "black") +
        button("Create New Split") +
        actionItem("sort", "", "", "", "black"),
        "",
        "spaced") +
    title("Unsettled:") +
    title("Settled:")
);

function settlePage(selected = false) {
    return page(
        selected,
        "settle",
        "Settle",
        ["Pay-Request", "Split", "History", "Wallet"],
        "Pay-Request",
        payRequestContent + splitContent + historyContent + walletContent,
        "",
        "",
        "",
        "",
        [],
        "",
        "",
        "",
        actionItem("settings", "settle", -1, "Settings", "black"),
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
