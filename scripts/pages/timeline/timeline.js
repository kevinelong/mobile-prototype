
function smartTitle(ve) {
    if (ve.period.ideas.length <= 0) {
        return "";
    }
    return `${ve.period.ideas.length} Smart Ideas for You!`;
}




function timelinePage(selected = false) {
    const defaultLocation = "Santa Barbara";
    const itemCount = 11;

    let ve = VitaEvent();
    ve.period = getPeriods()[LUNCH];
    ve.when = "12:00pm";
    ve.duration = "2 hours";
    ve.imagePath = "images/photos/brasil_arts_cafe.jpeg";
    ve.titleText = "Brasil Arts Cafe";
    ve.actions = [];
    ve.tags = ["South-American"];
    ve.kind = "dining";

    const showDay = day => {
        return cardListSection(
            day.when,
            actionItem("add-place", "timeline", -1, "add", "black"),
            day.where,
            day.events.map(timelineCard)
        );
    }
    const calendar_days = [
        Day("Yesterday - " + yesterdayDate.toDateString(), [
            VitaEvent(getPeriods()[BREAKFAST], "dining"),
        ]),
        Day("Today - " + todayDate.toDateString(), getPeriods()),
        Day("Tomorrow - " + tomorrowDate.toDateString(), getPeriods()),
    ];
    const card_content = calendar_days.map(showDay).join('');

    const page_content = actionButton("Smart Ideas", "smart-ideas") + cardList(card_content);

    const choices = ["Go!", "Check-Ins", "Pay/Settle", "Rate/Review", "Verify for Offset", "Memories",];

    return page(selected, "timeline", "Timeline", choices, "Go!", page_content);
}
