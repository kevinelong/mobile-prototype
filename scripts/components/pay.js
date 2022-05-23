const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    roundingIncrement: 5,
});

function currency(n) {
    return currencyFormat.format(n);
}


function amountElement(item = {name: "", amount: 0, turn: false}) {
    return rack(amount(item.amount) + text(item.name), "", item.turn ? "turn" : "");
}

function expenseElement(record = {}, index = 0) {
    const divideBy = 3;
    const part = record.amount / divideBy;
    const remaining = Math.ceil(part * 100) / 100;
    const turnIndex = index % divideBy;
    const amounts = [
        {name: "You", amount: part, turn: 0 === turnIndex},
        {name: "BF", amount: part, turn: 1 === turnIndex},
        {name: "JS", amount: part, turn: 2 === turnIndex},
    ].map(a => ({...a, amount: a.turn ? `${remaining}` : part}));
    
    return `
        <div class="expense-item card" data-index="${index}">
            ${rack(
        title(record.name) +
        text("total expense: ") +
        amount(record.amount)
    )}
            ${rack(amounts.map(amountElement).join(""), "", "split-amounts")}
        </div>
    `;
}

//THIS GLOBAL MUST DIE! We could use: "let SETTLE_GROUP_DATA = [" in data.js instead
// let expenseRecordList = [];

function getTotal(expenseRecordList) {
    return expenseRecordList.reduce((c, i) => i.amount + c, 0);
}

function updateTotal(e, list) {
    e.innerHTML = currency(getTotal(list));
}

function renderExpenseList(listElement, expenseRecordList) {
    listElement.innerHTML = expenseRecordList.map(expenseElement).join("");
}

function handleInput(e) {

}

function updateBalance(day, expenseRecordList) {
    try {
        const listElement = day.querySelector(".expense-list");
        renderExpenseList(listElement,expenseRecordList);
        const list = day.querySelectorAll(".amount.balance");
        [...list].map(e=>updateTotal(e,expenseRecordList));
    } catch (error) {
        console.error(error);
    }
}

function onAddExpense(e) {
    try {
        const day = e.closest(".day");
        // debugger;
        let expenseRecordList = SETTLE_GROUP_DATA[day.dataset.index].expenseList;
        const nameElement = day.querySelectorAll(".expense-name")[0];
        const amountElement = day.querySelectorAll(".expense-amount")[0];
        amountElement.oninput = onAddExpense;
        const amount = parseFloat(amountElement.value);
        const name = nameElement.value;
        if (name.length < 1 || isNaN(amount)) {
            return;
        }
        expenseRecordList.push(new expenseRecord(name, amount));

        nameElement.value = "";
        amountElement.value = "";
        nameElement.focus();

        updateBalance(day, expenseRecordList);
        const expenseElementList = day.querySelectorAll(".expense-list");
        expenseElementList.scrollTop = expenseElementList.scrollHeight;
    } catch (error) {
        console.error(error);
        return;
    }
}

function populateExpenses() {
    const dayElements = document.querySelectorAll(".card.day");
    [...dayElements].map(d => {
        renderExpenseList(
            d.querySelector(".expense-list"),
            SETTLE_GROUP_DATA[d.dataset.index].expenseList
        );
        updateBalance(d, SETTLE_GROUP_DATA[d.dataset.index].expenseList);
    });
}

function addExpensePanel(settleRecord) {
    return div(
        "add-expense",
        label(
            "add-expense-label",
            rack(
                actionItem(
                    "add",
                    "expense",
                    "",
                    "Add with Details",
                    "black"
                ) +
                actionItem(
                    "settings",
                    "expense",
                    "",
                    "Configure",
                    "black"
                )
            ) +
            rack(
                input(
                    "expense-name",
                    "text",
                    `placeholder="Expense"`
                ) +
                input(
                    "expense-amount",
                    "text",
                    `placeholder="$0.00"`
                ) +
                button(
                    "Add",
                    `onclick="onAddExpense(this)"`
                )
            )
            // +
            // rack(
            //     stack(
            //         amount(0) +
            //             text("You<br>(your turn)")
            //     ) +
            //         stack(amount(0) + text("BF")) +
            //         stack(amount(0) + text("JS"))
            // )
        )
    );
}

function breakdownItem(amountValue= 0, nameText="You"){
    return stack(
        amount(amountValue) + text(nameText)
    );
}

function dayBreakdown(settleRecord){
    const output = stack(
        text("Breakdown for the day:") +
        rack(
            settleRecord.group.people.map(
                (g,gi) => breakdownItem(
                    settleRecord.expenseList.reduce(
                        (p, c) => c.turnIndex == gi ? p + c.amount : p,
                        0
                    ),
                    g.isCurrentUser ? "You" : initials(g.name)
                )
            ).join("")
            ,"","breakdown")
    )
    console.log(settleRecord);
    console.log(output);
    return output;
}

function settleDayBlock(settleRecord, index, fullList) {

    settleRecord.updateTitle();
    // console.log(settleRecord, index, fullList)

    const titleContent = spread(
            text(settleRecord.titleText)
        ) +
        spread(
            text(settleRecord.message) +
            rack(
                text(settleRecord.amountPrefix) +
                amount(settleRecord.amount, "balance") +
                text(settleRecord.amountSuffix)
            ) +
            actionItem("show")
            // actionItem("open", "settle_day", "", "Open Day", "black")
        );

    return div(
        "day row card collapse",
        label(
            "",
            stack(
                titleContent +
                // rack(
                //     text(
                //         "Starting Balance<BR>\n(carried forward from the previous day):"
                //     ) +
                //     amount(settleRecord.startingAmount)
                // ) +
                addExpensePanel(settleRecord) +
                div("expense-list", "No Expenses") +
                div(
                    "breakdown",
                    stack(
                        rack(
                            dayBreakdown(settleRecord) +
                            stack(
                                text("Balance") +
                                rack(
                                    stack(
                                        amount(
                                            0,
                                            "",
                                            "balance"
                                        ) +
                                        actionItem(
                                            "settle",
                                            "",
                                            "",
                                            "Settle",
                                            "black"
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        ),
        `data-index="${index}"`
    );
}
