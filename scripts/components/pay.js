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

function expenseElement(record = {}, index, data = {}) {
    const divideBy = data.group.people.length;
    const part = record.amount / divideBy;
    const remaining = Math.ceil(part * 100) / 100;
    const turnIndex = record.turnIndex;
    const amounts = data.group.people.map(
        (p, i) => ({
            name: p.isCurrentUser ? "You" : initials(p.name),
            amount: i === turnIndex ? remaining : part,
            turn: i === turnIndex
        })
    );
    if (undefined === data) {
        console.log("NO DATA");
    }
    if (undefined === record) {
        console.log("NO RECORD");
    }
    const person = data.group.people[record.turnIndex];
    if (undefined === person) {
        console.log("NO PERSON");
    }
    const by = person.isCurrentUser ? "you" : initials(person.name);
    return `
        <div class="expense-item card ${person.isCurrentUser ? "turn" : ""}" data-index="${index}">
            ${rack(
        title(record.name) +
        text(`Total paid by ${by}: `) +
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

function renderExpenseList(listElement, expenseRecordList, data) {
    listElement.innerHTML = expenseRecordList.map((e, i) => expenseElement(e, i, data)).join("");
}

function handleInput(e) {

}

function updateTotals(all) {
    get(".total-owed-to-me").innerHTML = currency(all.getOwedToMe());
    get(".total-i-owe").innerHTML = currency(all.getTotalIOwe());
}

function updateBalance(day, expenseRecordList, data, all) {
    updateTotals(all);
    try {
        const listElement = day.querySelector(".expense-list");
        renderExpenseList(listElement, expenseRecordList, data);
        const list = day.querySelectorAll(".amount.balance");
        [...list].map(e => updateTotal(e, expenseRecordList, data));

        const breakdown = day.querySelector(".breakdown .breakdown");
        breakdown.outerHTML = dayBreakdown(data);
    } catch (error) {
        console.error(error);
    }
}

function onAddExpense(e) {
    try {
        const day = e.closest(".day");
        // debugger;
        let data = SETTLE_GROUP_DATA.list[day.dataset.index];
        let expenseRecordList = data.expenseList;
        const nameElement = day.querySelectorAll(".expense-name")[0];
        const amountElement = day.querySelectorAll(".expense-amount")[0];
        amountElement.oninput = onAddExpense;
        const amount = parseFloat(amountElement.value);
        const name = nameElement.value;
        if (name.length < 1 || isNaN(amount)) {
            return;
        }
        data.addExpense(new ExpenseRecord(name, amount));

        nameElement.value = "";
        amountElement.value = "";
        nameElement.focus();

        updateBalance(day, expenseRecordList, data, SETTLE_GROUP_DATA);
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
            SETTLE_GROUP_DATA.list[d.dataset.index].expenseList,
            SETTLE_GROUP_DATA.list[d.dataset.index]
        );
        updateBalance(d, SETTLE_GROUP_DATA.list[d.dataset.index].expenseList, SETTLE_GROUP_DATA.list[d.dataset.index], SETTLE_GROUP_DATA);
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

function breakdownItem(amountValue = 0, nameText = "You") {
    return div("breakdown-item",
        amount(amountValue) + text(nameText)
    );
}

function dayBreakdown(settleRecord) {
    const output = stack(
        text("Breakdown for the day:") +
        div(
            "breakdown-inner",
            settleRecord.breakdown.map(
                b => breakdownItem(b.total,
                    b.person.isCurrentUser ? "You" : initials(b.person.name)
                )
            ).join("")
        )
        , "", "breakdown");
    console.log(settleRecord);
    console.log(output);
    return output;
}

function settleDayBlock(settleRecord, index, fullList) {

    settleRecord.updateTitle();
    // console.log(settleRecord, index, fullList)

    const titleContent = spread(
        actionItem("add", "expense") +
    text(settleRecord.titleText) +
        // ) +
        // spread(
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
        // label(
        //     "",
        stack(
            titleContent +
            // rack(
            //     text(
            //         "Starting Balance<BR>\n(carried forward from the previous day):"
            //     ) +
            //     amount(settleRecord.startingAmount)
            // ) +
            // addExpensePanel(settleRecord) +
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
            // )
        ),
        `data-index="${index}"`
    );
}
