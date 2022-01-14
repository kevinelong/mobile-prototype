function activityCard(item={}, index){
    return card(
        "activity",
        item.title,
        item.description,
        item.people,
        [],
        item.image,
        item.tags,
        true
    )
}

function activityList(list) {
    if (!list) {
        return "";
    }
    return cardList(list.map(activityCard).join(""));
}

function dreamBoardPage(selected = false) {
    const boardData = {
        activities: [
            {
                kind: "food",
                title:"Brasil Art",
                description: "Restaurant and Bar",
                image: "images/photos/brasil_art.png",
                people:[peopleList[BF],peopleList[JOE],peopleList[RUBY],],
                tags:["bar","art"]
            }
        ]
    }

    return page(
        selected,
        "dream_board",
        "Board",
        ["All", "Personal", "Linked", "Groups", "Network"],
        "All",
        activityList(boardData.activities),
        "ALL NETWORK",
        "dream"
    );
}
