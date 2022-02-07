function sample(period) {
  return timelineCard(
    "timeline",
    "12:33am",
    "1.5 Hours",
    "images/explore_bg.png",
    "Loquita",
    "Santa Barbara",
    "Authentic Spanish food including hot and cold tapas, wood-fired grilled seafood and meats, and seasonal paella.",
    ["Spanish", "Tapas", "Seafood", "Wine", "Cocktails", "Restaurant"],
    group_of_three,
    ["favorite", "rate", "verify", "notify"],
    "2",
    "dining",
    3,
    period
  );
}
const SMART_IDEAS = {
  lunch: [
    "Outdoor Seating",
    "People Watchin",
    "Where Singles Go",
    "Liquid Lunch",
    "Mexican Cuisine",
    "American Cuisine",
    "Japanese Cuisine",
    "Fine Dining",
    "Fast Food",
    "More...",
  ],
  afternoon:[
      "E-Biking Rental", "Outdoor Bars/Pubs","Sailing Tours","Adventure Tours","Standup Paddle", "Beach", "More..."
  ],
  evening:[
    "Japanese Cuisine",
    "French Cuisine",
    "Italian Cuisine",
    "Outdoor Seating",
    "People Watchiing",
    "Where Singles Go",
  ]
};
function smart(period="lunch", timeRange = "11:00 am - 2:30 pm", currentMood="hungry", places=[]) {
  return smartCard(
    "smart",
    "",
    timeRange,
    "",
    `${SMART_IDEAS[period].length} Smart Ideas for You!`,
    div(
      "mood",
      "Current Mood: " + currentMood.toUpperCase() + actionItem("edit", "mood", "", "Update Mood")
    ),
    "or Check-In right here!" +
      actionItem("check-in", "", "", "Experience 1") +
      actionItem("check-in", "", "", "Experience 2") +
      actionItem("check-in", "", "", "Experience 3"),
    SMART_IDEAS[period],
    [],
    [],
    "2",
    "activity",
    3,
    period,
    places
  );
}
const periods = ["breakfast", "lunch", "dinner", "late-night"];
function actionButton(content, className, attrs) {
  return closedTag(
    "button",
    content,
    `action-button ${className}`,
    `onclick="actionClick('${className}', '${className}', '${className}')" $attrs`
  );
}
const timelineContent =
  actionButton("Smart Ideas", "smart-ideas") +
  cardList(
    [
      cardListSection(
        "Friday 12/12/2022",
        actionItem("add-place", "timeline", -1, "add", "black"),
        "Santa Barbara",
        [
          sample("breakfast"),
          col(
            title("CURRENT TIME: 11:04 am") +
              title(
                "LOCATION: Santa Barabara" +
                  actionItem("edit", "", "", "edit", "black")
              )
          ),
          smart("lunch", "11:00 am - 2:30 pm", "hungry",["Check-In to Brasil Cafe","Check into Sports Shop"]),
          smart("afternoon", "2:45 pm - 4:30 pm", "active",[]),
          smart("evening", "5:00 pm - 9:30 pm", "romantic",[]),
        ]
      ),
      cardListSection(
        "Saturday 12/13/2022",
        actionItem("add-place", "timeline", -1, "add", "black"),
        "Santa Barbara",
        periods.map(sample)
      ),
      cardListSection(
        "Sunday 12/14/2022",
        actionItem("add-place", "timeline", -1, "add", "black"),
        "Santa Barbara",
        periods.map(sample)
      ),
    ].join("")
  );

function timelinePage(selected = false) {
  const defaultLocation = "Santa Barbara";
  const itemCount = 11;

  return page(
    selected,
    "timeline",
    "Timeline",
    [
      "Go!",
      "Check-Ins",
      "Pay/Settle",
      "Rate/Review",
      "Verify for Offset",
      "Memories",
    ],
    "Go!",
    timelineContent,
    "",
    "",
    actionItem("add", "plan", -1, "", "black", false),
    // "Find what?",
    "",
    "",
    ""
    // tabSet(name, [
    //     {name: "Timeline", content: timelineContent},
    //     {name: "Messages", content: messagesContent},
    // ], "Timeline")
  );
}
