function activityCard(item = {}, index) {
    return card(
        "activity",
        item.title,
        item.description,
        item.people,
        [],
        item.image,
        item.tags,
        true,
        "recommended"
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
                title: "Brasil Arts Cafe",
                description: "the perfect blend of traditional Brazilian fare & one-of-a-kind Açai, Juice, and Smoothie creations",
                image: "images/photos/brasil_arts_cafe.jpeg",
                people: [peopleList[BF], peopleList[JOE], peopleList[RUBY],],
                tags: ["brazilian", "cafe"]
            }, {
                kind: "food",
                title: "Yoichi's",
                description: "A prix-fixe only spot featuring traditional Japanese small plates &amp; sushi in an intimate setting.",
                image: "images/photos/yoichis.jpg",
                people: [peopleList[BF], peopleList[JOE],],
                tags: ["japanese", "sushi", "prix-fixe"]
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
