function planDetailPage(selected = false) {
    return page(
        selected,
        "plan_detail",
        "Santa Barbara",
        ["Details", "Timeline", "Budget"],
        "Details",
        // choiceSet("",[
        //     icon("all") + "All",
        //     icon("ideas") + "Ideas",
        //     icon("favorites") + "Favorites",
        //     icon("going","","going"),
        // ]) +
        // dayRangeBlock() +
            label(
                "label-name",
                "Plan Name:" +
                    input("input-name", "text", `value="Santa Barbara"`) +
                    div(
                        "help-text",
                        `Name was generated automatically, but may be customized here.`
                    )
            ) +
            label(
                "label-when",
                "When:<br>" +
                    input("input-name", "date", `value="Santa Barbara"`) +
                    "-" +
                    input("input-name", "date", `value="Santa Barbara"`)
            ) +
            cardGroups(coplanners) +
            activityList(activityData),
        "all",
        "dream"
    );
}

//
// function planDetailPageOld(selected = false) {
//     return page(
//         selected,
//         "plan_detail",
//         "Santa Barbara",
//         [],
//         "",
//         simpleList(
//             "TODAY",
//             [
//                 ["12+", "Breakfast at Sunny's", "9:30am", "right"],
//                 ["4", "Golf on the hill.", "12:30pm", "right"],
//             ],
//             "Friday December 12 2022"
//         ) +
//             simpleList(
//                 "TOMORROW",
//                 [
//                     ["12+", "Breakfast at Sunny's", "9:30am", "right"],
//                     ["4", "Golf on the hill.", "12:30pm", "right"],
//                 ],
//                 "Saturday December 13 2022"
//             ) +
//             simpleList(
//                 "SUNDAY",
//                 [
//                     ["12+", "Breakfast at Sunny's", "9:30am", "right"],
//                     ["4", "Golf on the hill.", "12:30pm", "right"],
//                 ],
//                 "Sunday December 14 2022"
//             ) +
//             simpleList(
//                 "FRIDAY",
//                 [
//                     ["12+", "Breakfast at Sunny's", "9:30am", "right"],
//                     ["4", "Golf on the hill.", "12:30pm", "right"],
//                 ],
//                 "Friday December 19 2022"
//             ),
//         "ALL NETWORK",
//         "plan"
//     );
// }
