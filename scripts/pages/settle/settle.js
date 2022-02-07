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

function settlePage(selected = false) {
  return page(
    selected,
    "settle",
    "Settle",
    ["All", "I Owe", "Owed to me"],
    "All",

    dashboard([
      dashBoardItem("total owed to me", "$123.45", "remind-all"),
      dashBoardItem("total I owe", "$543.21", "settle-all"),
    ]) +
      cardList(
        [
          title(
            "Yesterday - Monday 12/11/2022" +
              actionItem(
                "settle",
                "settle",
                -1,
                "Add Expense",
                "black",
                false
              )
          ),
          title(
            col(
              "Daily Starting Balances" +
                settleGroup([
                  ["RR", -400],
                  ["BF", -600],
                  ["JS", 1000],
                ])
            ) +
              col(
                actionItem("discuss", "discuss", -1, "Discuss", "black", false) +
                actionItem(
                  "settle",
                  "settle",
                  -1,
                  "Request Settlement",
                  "black",
                  false
                ) 
              )
          ),
          settleCard(
            [
              ["RR", 0],
              ["BF", -200],
              ["JS", 0],
            ],
            200,
            "9:33 am yesterday, Tuesday 12/12/2022",
            "pay",
            -1,
            "dining",
            3,
            "The Boathouse Beach Cafe",
            "Santa Barbara, California USA"
          ),
          title(
            "Today - Tuesday 12/12/2022" +
              actionItem(
                "settle",
                "settle",
                -1,
                "Add Expense",
                "black",
                false
              )
          ),
          settleCard(
            [
              ["RR", -300],
              ["BF", 0],
              ["JS", 0],
            ],
            300,
            "11:00 am yesterday, Tuesday 12/12/2022",
            "pay",
            -1,
            "activity",
            3,
            "ATV Mountain Tour",
            "Montecito, California USA"
          ),
          title(
            "Today - Tuesday 12/12/2022" +
              actionItem(
                "settle",
                "settle",
                -1,
                "Add Expense",
                "black",
                false
              )
          ),
          settleCard(
            [
              ["RR", 0],
              ["BF", 275],
              ["JS", 0],
            ],
            275,
            "1:37 pm yesterday, Tuesday 12/12/2022",
            "pay",
            -1,
            "activity",
            3,
            "Janine's Cafe",
            "Montecito, California USA"
          ),
          settleCard(
            [
              ["RR", 800],
              ["BF", 0],
              ["JS", 0],
            ],
            800,
            "8:47 pm yesterday, Tuesday 12/12/2022",
            "pay",
            -1,
            "dining",
            3,
            "The Lark Restaurant",
            "Santa Barbara, California USA"
          ),
          title(
            col(
              "Daily Ending Balances" +
                settleGroup([
                  ["RR", 433],
                  ["BF", -391],
                  ["JS", -261],
                ])
            ) +
              col(
                actionItem("discuss", "discuss", -1, "Discuss", "black", false) +
                actionItem(
                  "settle",
                  "settle",
                  -1,
                  "Request Settlement",
                  "black",
                  false
                ) 
              )
          ),
          title(
            "Tomorrow - Wednesday 12/13/2022" +
              actionItem(
                "settle",
                "settle",
                -1,
                "Add Expense",
                "black",
                false
              )
          ),
        ].join("")
      )
  );
}
/*

                    [
                        ["Description", "Who", "Paid", "Amount", "Balance"],
                        [
                            "Breakfast at Wally's",
                            peopleList[RUBY],
                            "$99.99",
                            "+66.00",
                            "66.66",
                        ],
                        [
                            "Lunch at Toro Toro",
                            peopleList[JOE],
                            "$99.99",
                            "-33.33",
                            "33.33",
                        ],
                        [
                            "Dinner at Wilf's",
                            peopleList[BF],
                            "$105.99",
                            "-36.33",
                            "-3.00",
                        ],
                    ],
 */
