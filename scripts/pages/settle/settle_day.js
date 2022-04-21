function settleDayPage(selected = false) {
    return page(
        selected,
        "settle_day",
        "Settle Day - Group Split: Ongoing<br>(RR; BF; JS)",
        [],
        "",
        settleDashboard() +
            div(
                "day row",
                label(
                    "",
                    stack(
                        spread(
                            text("0 Expenses - Monday 12/12/2022") +
                                actionItem("show")
                        ) +
                            rack(
                                text(
                                    "Starting Balance (carried forward from the previous day):"
                                ) + amount(0)
                            ) +
                            div(
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
                                        ) +
                                        rack(
                                            stack(
                                                amount(0) +
                                                    text("You<br>(your turn)")
                                            ) +
                                                stack(amount(0) + text("BF")) +
                                                stack(amount(0) + text("JS"))
                                        )
                                )
                            ) +
                            div("expense-list", "No Expenses") +
                            div(
                                "breakdown",
                                stack(
                                    rack(
                                        stack(
                                            text("Breakdown for the day:") +
                                                rack(
                                                    stack(
                                                        amount(0) + text("You")
                                                    ) +
                                                        stack(
                                                            amount(0) +
                                                                text("BF")
                                                        ) +
                                                        stack(
                                                            amount(0) +
                                                                text("JS")
                                                        )
                                                )
                                        ) +
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
                )
            ),
        "",
        "settle"
    );
}

const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    roundingIncrement: 5,
});

function currency(n) {
    return currencyFormat.format(n);
}

function expenseRecord(name = "", amount = 0) {
    return {
        name: name,
        amount: amount,
    };
}

function amountElement(item = { name: "", amount: 0, turn: false }) {
    return rack(amount(item.amount) + text(item.name), "", item.turn ? "turn" : "");
}

function expenseElement(record = {}, index = 0) {
    const divideBy = 3;
    const part = record.amount / divideBy;
    const remaining = Math.ceil(part * 100) / 100;
    const turnIndex = index % divideBy;
    const amounts = [
        { name: "You", amount: part, turn: 0 === turnIndex },
        { name: "BF", amount: part, turn: 1 === turnIndex },
        { name: "JS", amount: remaining, turn: 2 === turnIndex },
    ];
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

let expenseRecordList = [];

function getTotal() {
    return expenseRecordList.reduce((c, i) => i.amount + c, 0);
}

function updateTotal(e) {
    e.innerHTML = currency(getTotal());
}

function renderExpenseList(listElement) {
    listElement.innerHTML = expenseRecordList.map(expenseElement).join("");
}

function handleInput(e) {

}
parentElement.querySelectorAll(".expense-amount")[0].oninput = onAddExpense;
function onAddExpense(e) {
    try {
        const parentElement = e.closest(".day");
        const nameElement = parentElement.querySelectorAll(".expense-name")[0];
        const amountElement =
            parentElement.querySelectorAll(".expense-amount")[0];
        amountElement.oninput = onAddExpense;
        const amount = parseFloat(amountElement.value);
        const name = nameElement.value;
        if (name.length < 1 || isNaN(amount)) {
            return;
        }
        expenseRecordList.push(expenseRecord(name, amount));

        nameElement.value = "";
        amountElement.value = "";
        nameElement.focus();

        renderExpenseList(parentElement.querySelectorAll(".expense-list")[0]);

        updateTotal(parentElement.querySelectorAll(".amount.balance")[0]);
    } catch (error) {
        console.error(error);
        return;
    }
}

window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".expense-name")[0].focus();
});

window.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        document.querySelector("button").click();
    }
});