function timelineCardContent(
    what = "",
    when = "",
    duration = "",
    kind,
    title,
    body = "",
    groups = [],
    actions = "",
    imagePath,
    tags = [],
    id = -1,
    kind2 = "activity",
    booking_index = -1,
    period = "lunch",
) {


    let qty = 0;
    if (groups && groups[0] && groups[0].people) {
        qty = groups[0].people.length;
    }
    console.log("booking_index", booking_index)
    let booking = "";
    if (booking_index >= 0) {
        booking = actionItem("book", "book", -1, "Book Now!");
    }
    // const booking = "";

    const is_current_period = (period === current_period ? "is-current-period" : "not-current-period");
    
    console.log(current_period, period, is_current_period);

    let style = "";
    if (imagePath){
        if(is_current_period){
            style = `style="background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0),rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1)), black url('${imagePath}') center/cover no-repeat;"`;
        }else{
            style = `style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), black url('${imagePath}') center/cover no-repeat;"`;
        }
    }else{
        style = `style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), black;"`;
    }

    return div(
        `card timeline ${kind} ${kind2} ${period} ${is_current_period}`,
        div("card-inner",
        // img("background top", "images/backgrounds/top-gradient-black.svg") +
        cardSection(
            contentPanel(body) +
            cardTags(tags) +
            div("memories",
                col(
                    row(text("Memories:")) +
                    row(
                        row(
                            image("images/dish_1.png") +
                            image("images/dish_2.png") +
                            image("images/dish_3.png")
                        ) +
                        actionItem("upload", "","","Upload", "", false)
                    )
                )
            )) +
        row(
            col(
                row(
                    col(cardGroups(groups)) +
                    booking) +
                actionList(`card-actions`, actions, false, qty)
            )
        ) 
        // img(
        //     "background bottom",
        //     "images/backgrounds/bottom-gradient-black.svg"
        // )
        ,
        imagePath ? `style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), black url('${imagePath}') center/cover no-repeat;"` : ""
        )
    ) //+ cardTitle(title);
}

current_period = "lunch"

function timelineCard(
    what = "",
    when = "",
    duration = "",
    imagePath = "images/photos/cannon-beach.jpg",
    title = "",
    subtitle = "",
    content = "",
    tags = [],
    groups = [],
    actions = [],
    id = 0,
    kind = "timeline",
    booking_index = -1,
    period = "lunch"
) {


    return timelineCardContent(
        what,
        when,
        duration,
        kind,
        title,
        row(
            cardSubtitle(`${period} ${when} ${duration}`) +
            actionItem("plan", "", "", "Edit")
        ) +
        row(
            icon(kind) +
            cardTitle(title) +
            actionItem("open", "explore_detail", id, "")
        ) +
        cardSubtitle(subtitle),
        groups,
        actions,
        imagePath,
        tags,
        id,
        kind,
        booking_index,
        period
    );
}
