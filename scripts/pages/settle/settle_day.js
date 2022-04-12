function settleDayPage(selected = false) {
    return page(
        selected,
        "settle_day",
        "Settle Day - Group Split: Ongoing<br>(RR; BF; JS)",
        [],
        "",
        settleDashboard() +
        div("day row",
            label("",
                stack(
                    spread(
                        text("0 Expenses - Monday 12/12/2022") +
                        actionItem("show")
                    ) +
                    rack(
                        text("Starting Balance (carried forward from the previous day):") +
                        amount(0)
                    ) +
                    div("add-expense",
                        label("add-expense-label",
                            rack(
                                actionItem("add", "expense", "", "Add with Details", "black") +
                                actionItem("settings", "expense", "", "Configure", "black")
                            ) +
                            rack(
                                input("expense-name", "text", `placeholder="Expense"`) +
                                input("amount", "text", `placeholder="$0.00"`) +
                                button("Add")
                            ) +
                            rack(
                                stack(
                                    amount(0) +
                                    text("You<br>(your turn)")
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
                        )
                    ) +
                    div("breakdown",
                        stack(
                            rack(
                                stack(
                                    text("Breakdown for the day:") +
                                    rack(
                                        stack(
                                            amount(0) +
                                            text("You")
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
                                            amount(0) +
                                            actionItem("settle", "", "", "Settle", "black")
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        ),
        "", "settle"
    );
}
