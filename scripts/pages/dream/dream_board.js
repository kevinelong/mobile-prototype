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
                title:"Brasil Arts Cafe",
                description: "the perfect blend of traditional Brazilian fare & one-of-a-kind Açai, Juice, and Smoothie creations",
                image: "images/photos/brasil_arts_cafe.jpeg",
                people:[peopleList[BF],peopleList[JOE],peopleList[RUBY],],
                tags:["bar","art"]
            },{
                kind: "food",
                title:"Yoichi's",
                description: "Restaurant and Bar",
                image: "images/photos/yoichis.jpg",
                people:[peopleList[BF],peopleList[JOE],],
                tags:["bar","art"]
            },
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
